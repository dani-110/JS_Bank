import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import SelectFields from "../../components/SelectFields";
const NetworkServerUpdateForm = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            serverId: "",
            serverName: "",
            port: "",
            ip: "",
            serverType: "",
            connectTimeout: "",
            readTimeOut: "",
            SSLEnable: "",
            url: "",
            allowedIP: "",
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

    const serverType = ['Server', 'Client']
    const SSLEnable = ['Yes', 'No']

    return <form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="serverId"
                        type="text"
                        label="Server ID"
                        control={control}
                        rules={{
                            required: "Server ID is required",
                        }}
                        error={errors?.serverId}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="serverName"
                        type="text"
                        label="Server Name"
                        control={control}
                        rules={{
                            required: "Server Name is required",
                        }}
                        error={errors?.serverName}
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
                        fieldName="serverType"
                        label="server Type"
                        control={control}
                        rules={{
                            required: "server Type is required",
                        }}
                        options={serverType.map((e) => {
                            return { label: e, value: e };
                        })}
                        error={errors?.serverType}
                        
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="connectTimeout"
                        type="text"
                        label="Connect Timeout"
                        control={control}
                        rules={{
                            required: "Connect Timeout is required",
                        }}
                        error={errors?.connectTimeout}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="readTimeOut"
                        type="text"
                        label="Read Timeout"
                        control={control}
                        rules={{
                            required: "Read Timeout is required",
                        }}
                        error={errors?.readTimeOut} />
                </Grid>
                <Grid item xs={6}>
                    <SelectFields
                        fieldName="SSLEnable"
                        label="SSL Enable"
                        control={control}
                        options={SSLEnable.map((e) => {
                            return { label: e, value: e };
                        })}
                        
                        rules={{
                            required: "SSL Enable is required",
                        }}
                        error={errors?.SSLEnable}
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
                <Grid item xs={12}>
                    <ButtonContainer isSingle>
                        <Button size="medium" variant="contained" color="primary" >Save</Button>
                        
                    </ButtonContainer>
                </Grid>
            </Grid>
        </form>
};

export default NetworkServerUpdateForm;
