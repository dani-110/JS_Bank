import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DateTimePickerFields from "../../components/dateTimePickerField";
import { useSelector } from "react-redux";
import { alphaRegex, alphanumericRegex, idRegex, numberRegex, phoneRegex, setDataObject } from "../../utils/Utils";

const SearchPanel = (props) => {
    const { fetchList } = props

    const { taxFilter, riskFilter } = useSelector(state => state.filter)

    const defaultValues = useForm({
        defaultValues: {
            consumerid: "",
            firstname: "",
            lastname: "",
            mobileno: "",
            nationalid: "",
            onboardingdatefrom: "",
            onboardingdateto: "",
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
        getValues,
        formState: { errors },
    } = defaultValues;


    const submit = () => {
        let data = setDataObject(getValues())
        data["recordcount"] = 10
        data["pagenumber"] = 1
       data["kycstagestatus"] = 0
        data["kycprocstage"] = ''
        console.log(data)
        fetchList(data)
    }

    return (
        <form>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="consumerid"
                        type="text"
                        label="Consumer ID"
                        control={control}
                        pattern={numberRegex}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="firstname"
                        type="text"
                        label="First Name"
                        control={control}
                        pattern={alphaRegex}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="lastname"
                        type="text"
                        label="Last Name"
                        control={control}
                        pattern={alphaRegex}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="mobileno"
                        type="text"
                        label="Mobile No"
                        control={control}
                        pattern={phoneRegex}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="nationalid"
                        type="text"
                        label="National ID"
                        control={control}
                        pattern={idRegex}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DateTimePickerFields
                        fieldName="onboardingdatefrom"
                        type="date"
                        label="On Boarding Date From"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DateTimePickerFields
                        fieldName="onboardingdateto"
                        type="date"
                        label="On Boarding Date To"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ButtonContainer>
                        <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(submit)} >Search</Button>
                        <Button size="medium" variant="contained" color="secondary" onClick={() => reset()}>Reset</Button>
                    </ButtonContainer>
                </Grid>
            </Grid>
        </form>
    )
};

export default SearchPanel;
