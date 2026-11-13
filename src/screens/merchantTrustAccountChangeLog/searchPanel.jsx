import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DateTimePickerFields from "../../components/dateTimePickerField";
import { alphaRegex, ibanRegex, numberRegex, setDataObject } from "../../utils/Utils";
import { useSelector } from "react-redux";

const SearchPanel = (props) => {
    const { fetchList } = props
    const { banksFilter } = useSelector(state => state.filter)

    const defaultValues = useForm({
        defaultValues: {
            transactiondatefrom: "",
            transactiondateto: "",
            activitydatefrom: "",
            activitydateto: "",
            nationalid: "",
            accountnum: "",
            trustaccountno: "",
            trustaccountiban: "",
            bankcode: "",

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
        data['requeststatus'] = 2;
        fetchList(data)
    }

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3}>
                    <DateTimePickerFields
                        fieldName="transactiondatefrom"
                        label="Request Date From"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DateTimePickerFields
                        fieldName="transactiondateto"
                        label="Request Date To"
                        minDate={watch('transactiondatefrom')}
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DateTimePickerFields
                        fieldName="activitydatefrom"
                        label="Request Date From"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DateTimePickerFields
                        fieldName="activitydateto"
                        label="Request Date To"
                        minDate={watch('activitydatefrom')}
                        control={control}
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
                        fieldName="accountnum"
                        type="text"
                        label="Account No"
                        control={control}
                        pattern={numberRegex}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputFields
                        fieldName="trustaccountno"
                        type="text"
                        label="Trust Account No"
                        control={control}
                        pattern={numberRegex}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputFields
                        fieldName="trustaccountiban"
                        type="text"
                        label="Trust IBAN"
                        control={control}
                        pattern={ibanRegex}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <SelectFields
                        fieldName="bankcode"
                        label="Bank"
                        control={control}
                        options={banksFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}
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
