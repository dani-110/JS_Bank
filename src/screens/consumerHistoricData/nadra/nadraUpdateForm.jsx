import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import SelectFields from "../../components/SelectFields";
import ToggleButton from "../../components/toggleButton/toggleButton";
const NadraUpdateForm = (props) => {
    const { open, setOpen } = props
    const handleOpen = () => {
        setOpen(!open)
    }

    const defaultValues = useForm({
        defaultValues: {
            channelName: "",
            key: "",
            port: "",
            allowedIP: "",
            ip: "",
            channelType: "",
            keyType: "",
            kcv: "",
            connectTimeOut: "",
            readTimeOut: "",
            url: "",
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

    const channelType = [
        'Channel',
        'Web Server',
        'Agent',
        'Bank Branches',
        'Internet Banking',
        'Merchant',
        'Others'
    ]
    const keyType = ['ZMK', 'TPK', 'LMK']

    return <form>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <InputFields
                    fieldName="channelName"
                    type="text"
                    label="Channel Name"
                    control={control}
                    rules={{
                        required: "Channel Name is required",
                    }}
                    error={errors?.channelName}
                />
            </Grid>
            <Grid item xs={6}>
                <InputFields
                    fieldName="key"
                    type="text"
                    label="Key"
                    control={control}
                    rules={{
                        required: "Key is required",
                    }}
                    error={errors?.key}
                />
            </Grid>
            <Grid item xs={6}>
                <InputFields
                    fieldName="port"
                    type="text"
                    label="Port"
                    control={control}
                    rules={{
                        required: "Port is required",
                    }}
                    error={errors?.port}
                />
            </Grid>
            <Grid item xs={6}>
                <InputFields
                    fieldName="allowedIP"
                    type="text"
                    label="Allowed IP"
                    control={control}
                    rules={{
                        required: "Allowed IP is required",
                    }}
                    error={errors?.allowedIP}
                />
            </Grid>
            <Grid item xs={6}>
                <InputFields
                    fieldName="ip"
                    type="text"
                    label="IP"
                    control={control}
                    rules={{
                        required: "IP is required",
                    }}
                    error={errors?.ip}
                />
            </Grid>

            <Grid item xs={6}>
                <SelectFields
                    fieldName="channelType"
                    label="Channel Type"
                    control={control}
                    rules={{
                        required: "Channel Type is required",
                    }}
                    options={channelType.map((e) => {
                        return { label: e, value: e };
                    })}
                    error={errors?.channelType}

                />
            </Grid>
            <Grid item xs={6}>
                <SelectFields
                    fieldName="keyType"
                    label="Key Type"
                    control={control}
                    rules={{
                        required: "Key Type is required",
                    }}
                    options={keyType.map((e) => {
                        return { label: e, value: e };
                    })}
                    error={errors?.keyType}

                />
            </Grid>

            <Grid item xs={6}>
                <InputFields
                    fieldName="kcv"
                    type="text"
                    label="KCV"
                    control={control}
                    rules={{
                        required: "KCV is required",
                    }}
                    error={errors?.kcv}
                />
            </Grid>

            <Grid item xs={6}>
                <InputFields
                    fieldName="connectTimeOut"
                    type="text"
                    label="Connect TimeOut"
                    control={control}
                    rules={{
                        required: "Connect TimeOut is required",
                    }}
                    error={errors?.connectTimeOut}
                />
            </Grid>
            <Grid item xs={6}>
                <ToggleButton
                    fieldName="readTimeOut"
                    lable="Read Timeout"
                    control={control}
                    rules={{
                        required: "Read Timeout is required",
                    }}
                    error={errors?.readTimeOut}
                />
            </Grid>

            <Grid item xs={6}>
                <InputFields
                    fieldName="url"
                    type="text"
                    label="URL"
                    control={control}
                    rules={{
                        required: "URL is required",
                    }}
                    error={errors?.url}
                />
            </Grid>

            <Grid item xs={12}>
                <ButtonContainer isSingle>
                    <Button size="medium" variant="contained" color="primary" >Save</Button>
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default NadraUpdateForm;
