import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, IconButton } from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import Permissions from "../permissions/permission";
import add from '../../assests/add.png'
import { alphanumericRegex, setDataObject } from "../../utils/Utils";
import { useDispatch } from "react-redux";
import { createrole } from "../../store/actions/roles";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
const RolesUpdateForm = (props) => {
    const { data, setOpen, type } = props
    const dispatch = useDispatch();
    const [role, setRole] = useState(null)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext);
    const defaultValues = useForm({
        defaultValues: {
            'rolename': ""
        },
    });

    console.log(data)

    const {
        control,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        reset,
        resetField,
        getValues,
        formState: { errors },
    } = defaultValues;

    useEffect(() => {
        console.log(role)
        if (data?.rid) {
            setRole(data)
            reset({
                rolename: data.rolename || "",
            })
        }
    }, [])

    const addRoleName = () => {
        let obj = setDataObject(getValues())
        obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + '|Save'
        console.log(obj)
        dispatch(createrole(obj)).then((res) => {
            if (res.payload.responsecode == 0) {
                console.log(res.payload.roleCustomLis)
                setRole(res.payload.roleCustomList[0])
            }
        })
    }

    return <form>
        <Grid container spacing={2}>
            {!data?.rid && <>
                <Grid item xs={10}>
                    <InputFields
                        fieldName="rolename"
                        type="text"
                        label="Role Name"
                        control={control}
                        rules={{
                            required: "Role Name is required",
                        }}
                        error={errors?.rolename}
                        pattern={alphanumericRegex}
                    />
                </Grid>
                <Grid item xs={2}>
                    {/* <InputFields
                    fieldName="permissions"
                    type="text"
                    label="Permissions"
                    control={control}
                    rules={{
                        required: "Permissions is required",
                    }}
                    error={errors?.permissions}
                /> */}
                    <IconButton onClick={handleSubmit(addRoleName)} sx={{ width: '40px', margin: '0px auto' }}>
                        <img src={add} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                    </IconButton>
                </Grid>
            </>}

            {/* <Grid item xs={12}>
                <ButtonContainer isSingle>
                    <Button size="medium" variant="contained" color="primary" >Save</Button>

                </ButtonContainer>
            </Grid> */}
        </Grid>

        {role && <Permissions role={role} />}
    </form>
};

export default RolesUpdateForm;
