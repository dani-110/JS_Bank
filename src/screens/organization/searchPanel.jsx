import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import DatePickerFields from "../../components/datePickerField";

const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            name: "",
            createdAt: "",
            updatedAt: ""
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

    console.log(watch('createDate'))
    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="name"
                    type="text"
                    label="Name"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <DatePickerFields
                    fieldName="createdAt"
                    type="date"
                    label="Create At"
                    control={control}
                />

            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <DatePickerFields
                    fieldName="updatedAt"
                    type="date"
                    label="Update At"
                    control={control}
                />

            </Grid>
            <Grid item xs={12}>
                <ButtonContainer>
                    <Button size="medium" variant="contained" color="primary" >Search</Button>
                    <Button size="medium" variant="contained" color="secondary" onClick={()=>reset()}>Reset</Button>
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default SearchPanel;
