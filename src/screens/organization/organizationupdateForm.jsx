import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
const OrganizationUpdateForm = (props) => {

    const defaultValues = useForm({
        defaultValues: {
            id: "",
            name: "",
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

    return <form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="id"
                        type="text"
                        label="Id"
                        control={control}
                        rules={{
                            required: "Id is required",
                        }}
                        error={errors?.id}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="name"
                        type="text"
                        label="Name"
                        control={control}
                        rules={{
                            required: "Name is required",
                        }}
                        error={errors?.name}
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

export default OrganizationUpdateForm;
