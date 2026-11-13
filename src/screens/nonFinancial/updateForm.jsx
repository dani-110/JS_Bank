import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
const UpdateForm = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            organizationId: "",
            key: "",
            secret: "",
            quota: "",
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

    return <Card>
        <form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="organizationId"
                        type="text"
                        label="Organization Id"
                        control={control}
                        rules={{
                            required: "Organization Id is required",
                        }}
                        error={errors?.organizationId}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="version"
                        type="text"
                        label="Version"
                        control={control}
                        rules={{
                            required: "Version is required",
                        }}
                        error={errors?.version}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="secret"
                        type="text"
                        label="Secret"
                        control={control}
                        rules={{
                            required: "Secret is required",
                        }}
                        error={errors?.secret}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="quota"
                        type="text"
                        label="Quota"
                        control={control}
                        rules={{
                            required: "Quota is required",
                        }}
                        error={errors?.quota}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <ButtonContainer>
                        <Button size="medium" variant="contained" color="primary" >Save</Button>
                        <Button size="medium" variant="contained" color="secondary" onClick={()=>reset()}>Reset</Button>
                    </ButtonContainer>
                </Grid>
            </Grid>
        </form>
    </Card>
};

export default UpdateForm;
