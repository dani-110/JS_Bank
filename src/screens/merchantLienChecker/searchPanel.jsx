import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DateTimePickerFields from "../../components/dateTimePickerField";
import { alphanumericRegex, alphaRegex, numberRegex, setDataObject } from "../../utils/Utils";
import { useSelector } from "react-redux";

const SearchPanel = (props) => {
    const { fetchList } = props

    const { actstatusFilter, walletlevelsFilter } = useSelector(state => state.filter)
    const defaultValues = useForm({
        defaultValues: {
            iban: "",
            mobileno: "",
            nationalid: "",
            merchantid: "",
            status: "",
            level: "",
            onboardingfrom: "",
            onboardingto: "",

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
        fetchList(data)
    }

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <InputFields
                        fieldName="iban"
                        type="text"
                        label="IBAN"
                        control={control}
                        pattern={alphanumericRegex}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputFields
                        fieldName="mobileno"
                        type="text"
                        label="Mobile No"
                        control={control}
                        pattern={numberRegex}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputFields
                        fieldName="nationalid"
                        type="text"
                        label="National ID"
                        control={control}
                        pattern={numberRegex}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputFields
                        fieldName="merchantid"
                        type="text"
                        label="Merchant ID"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <SelectFields
                        fieldName="status"
                        label="Status"
                        control={control}
                        options={actstatusFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <SelectFields
                        fieldName="level"
                        label="Level"
                        control={control}
                        options={walletlevelsFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}

                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <DateTimePickerFields
                        fieldName="onboardingfrom"
                        type="date"
                        label="Onboarding From"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <DateTimePickerFields
                        fieldName="onboardingto"
                        type="date"
                        minDate={watch('onboardingfrom')}
                        label="Onboarding To"
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
