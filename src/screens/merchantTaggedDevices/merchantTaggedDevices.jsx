import React, { useContext, useEffect, useState } from "react";
import DataGrid from "./dataGrid";
import Card from "../../components/card/Card";
import { useDispatch } from "react-redux";
import { getmerchantdevice, setmerchantalloweddevice } from "../../store/actions/merchants";
import { Box, Button, Grid, Typography } from "@mui/material";
import ToggleButton from "../../components/toggleButton/toggleButton";
import { useForm } from "react-hook-form";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import { updateMerchantsRecord } from "../../store/reducers/merchants-slice";
import PopModal from "../../components/popModal/popModal";
import ButtonContainer from "../../components/buttonContainer";
import success from '../../assests/success.png';

const MerchantTaggedDevices = (props) => {
    const { data } = props

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


    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    useEffect(() => {
        reset({
            allowUser: data?.allowdevicechange == 1 || "",
        })
        fetchList()
    }, [])

    const fetchList = () => {
        setIsLoading(true)
        const obj = {
            "mid": data.mid
        }
        dispatch(getmerchantdevice(obj)).then((res) => {
            setIsLoading(false)
        });
    }

    const changeTaggedDevice = () => {
        const obj = {
            "mid": data.mid,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|Allow user to change tagged device'
        }
        dispatch(setmerchantalloweddevice(obj)).then((res) => {
            setShowDeviceMsg(true)
            const objSave = { ...data }
            objSave['allowdevicechange'] = watch('allowUser') ? 1 : 0
            dispatch(updateMerchantsRecord(objSave))
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

export default MerchantTaggedDevices;
