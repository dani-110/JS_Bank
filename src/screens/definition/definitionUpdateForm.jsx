import React from "react";
import { useForm } from "react-hook-form";
import {Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import TextAreaFields from "../../components/textAreaFields";
const DefinitionUpdateForm = (props) => {

    const defaultValues = useForm({
        defaultValues: {
            name: "",
            description: "",
            version: "",
            openApiSpec: "",
            isHosted: "",
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

    const isHosted = [
        {
            value: true,
            label: "True",
        },
        {
            value: false,
            label: "False",
        },
    ]
    return <form>
        <Grid container spacing={2}>
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
                <TextAreaFields
                    fieldName="description"
                    type="text"
                    label="Description"
                    control={control}
                    rules={{
                        required: "Description is required",
                    }}
                    error={errors?.description}
                />
            </Grid>
            <Grid item xs={6}>
                <TextAreaFields
                    fieldName="openApiSpec"
                    type="text"
                    label="Open API Spec"
                    control={control}
                    rules={{
                        required: "Open API Spec is required",
                    }}
                    error={errors?.openApiSpec}
                />
            </Grid>
            <Grid item xs={12}>
                <SelectFields
                    fieldName="isHosted"
                    label="IsHosted"
                    control={control}
                    rules={{
                        required: "IsHosted is required",
                    }}
                    options={isHosted.map(({ label, value }) => {
                        return { label: label, value: value };
                    })}
                    error={errors?.isHosted}

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

export default DefinitionUpdateForm;
