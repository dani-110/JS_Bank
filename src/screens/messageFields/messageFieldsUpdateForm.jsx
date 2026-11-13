import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
const MessageFieldsUpdateForm = (props) => {

    const defaultValues = useForm({
        defaultValues: {
            name: "",
            dataType: ""
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


    const entity = []

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
                        fieldName="dataType"
                        type="text"
                        label="Data Type"
                        control={control}
                        rules={{
                            required: "Data Type is required",
                        }}
                        error={errors?.dataType}
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

export default MessageFieldsUpdateForm;
