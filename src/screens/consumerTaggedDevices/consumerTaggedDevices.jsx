import React, { useContext, useEffect, useState } from "react";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import { useDispatch } from "react-redux";
import { getconsumerdevice, setconsumeralloweddevice } from "../../store/actions/consumer";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import ToggleButton from "../../components/toggleButton/toggleButton";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import { updateconsumersRecord } from "../../store/reducers/consumers-slice";
import PopModal from "../../components/popModal/popModal";
import ButtonContainer from "../../components/buttonContainer";
import success from '../../assests/success.png';

const ConsumerTaggedDevices = (props) => {
    const { data } = props

    const dispatch = useDispatch();
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const [isLoading, setIsLoading] = useState(false);
    const [showDeviceMsg, setShowDeviceMsg] = useState(false)

    const defaultValues = useForm({
        defaultValues: {
            allowUser: "",
        },
    });

    const {
        control,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        reset,
        resetField,
        formState: { errors },
    } = defaultValues;

    useEffect(() => {
        reset({
            allowUser: data?.allowdevicechange == 1 || "",
        })
        fetchList()
    }, [])

    const fetchList = () => {
        setIsLoading(true)
        const obj = {
            "cid": data.cid
        }
        dispatch(getconsumerdevice(obj)).then((res) => {
            setIsLoading(false)
        });
    }

    const changeTaggedDevice = () => {
        const obj = {
            "cid": data.cid,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|Allow user to change tagged device'
        }
        dispatch(setconsumeralloweddevice(obj)).then((res) => {
            setShowDeviceMsg(true)
            const objSave = { ...data }
            objSave['allowdevicechange'] = watch('allowUser') ? 1 : 0
            dispatch(updateconsumersRecord(objSave))
        })
    }

    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={0} style={{ margin: '10px 0px' }}>
                <Grid item xs={12}>
                    <ToggleButton
                        fieldName="allowUser"
                        lable="Allow user to change tagged device (this will allow user to login on new device within 7 days time)"
                        control={control}
                        disabled={watch('allowUser')}
                        onChangeValue={changeTaggedDevice}
                    />
                </Grid>
            </Grid>
            <DataGrid fetchList={fetchList} isLoading={isLoading} />
            <PopModal open={showDeviceMsg} setOpen={setShowDeviceMsg}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <img src={success} style={{ height: '100px', objectFit: 'contain' }} alt="warning" />
                    <Typography variant="body1" className="headingTitle">
                        User can now login on new device within 7 days time.
                    </Typography>
                    <ButtonContainer isSingle >
                        <Button size="medium" variant="contained" color="secondary" onClick={() => setShowDeviceMsg(false)} >Ok</Button>
                    </ButtonContainer>
                </Box>
            </PopModal>
        </Card>
    );
};

export default ConsumerTaggedDevices;
