import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import DatePickerFields from "../../components/datePickerField";

const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            organizationId: "",
            createDate: "",
            updateDate: ""
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
            <Grid item xs={12} lg={4}>
                <InputFields
                    fieldName="organizationId"
                    type="text"
                    label="Organization Id"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <DatePickerFields
                    fieldName="createDate"
                    type="date"
                    label="Create Date"
                    control={control}
                />

            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <DatePickerFields
                    fieldName="updateDate"
                    type="date"
                    label="Update Date"
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
