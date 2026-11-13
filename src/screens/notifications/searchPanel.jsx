import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import SelectFields from "../../components/SelectFields";
const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            fromID: "",
            notificationType: "",
            loginId: "",
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


    const notificationType = [
        { label: 1, value: 'push' },
        { label: 2, value: 'email' },
        { label: 3, value: 'sms' },
        { label: 4, value: 'all' },
        { label: 5, value: 'push + email' },
        { label: 6, value: 'push + sms' },
        { label: 7, value: 'email + sms' },
    ]
    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="fromID"
                    type="text"
                    label="From ID"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <SelectFields
                    fieldName="notificationType"
                    label="Notification Type"
                    control={control}
                    options={notificationType.map((e) => {
                        return { label: e, value: e };
                    })}
                    
                />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
                <InputFields
                    fieldName="loginID"
                    type="text"
                    label="Login ID"
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
