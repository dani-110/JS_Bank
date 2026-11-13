import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import SelectFields from "../../components/SelectFields";
const NetworkChannelUpdateForm =(props) => {

    const defaultValues = useForm({
        defaultValues: {
            channelID: "",
            channelName: "",
            port: "",
            allowedIP: "",
            ip: "",
            key: "",
            channelType: "",
            keyType: "",
            kcv: "",
            channelCode: "",
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

    const channelType = ['Server', 'Client']
    const keyType = ['LMK', 'ZPK', 'TPK']

    return <form>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="channelID"
                        type="text"
                        label="Channel ID"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="channelName"
                        type="text"
                        label="Channel Name"
                        control={control}
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="port"
                        type="text"
                        label="Port"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="allowedIP"
                        type="text"
                        label="Allowed IP"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="ip"
                        type="text"
                        label="IP"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="key"
                        type="text"
                        label="Key"
                        control={control}
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <SelectFields
                        fieldName="channelType"
                        label="Channel Type"
                        control={control}
                        options={channelType.map((e) => {
                            return { label: e, value: e };
                        })}
                        
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <SelectFields
                        fieldName="keyType"
                        label="Key Type"
                        control={control}
                        options={keyType.map((e) => {
                            return { label: e, value: e };
                        })}
                        
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="kcv"
                        type="text"
                        label="KCV"
                        control={control}
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="channelCode"
                        type="text"
                        label="Channel Code"
                        control={control}
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

export default NetworkChannelUpdateForm;
