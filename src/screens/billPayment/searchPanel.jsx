import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Grid, TextField } from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DateTimePickerFields from "../../components/dateTimePickerField";
import DatePickerFields from "../../components/datePickerField";
import { useSelector } from "react-redux";
import { alphanumericRegex, numberRegex, setDataObject } from "../../utils/Utils";

const SearchPanel = (props) => {
    const { fetchList } = props
    const { ubpsrespcodeFilter, respcodeFilter, requeststatus } = useSelector(state => state.filter)

    const defaultValues = useForm({
        defaultValues: {
            transactiondatefrom: "",
            transactiondateto: "",
            stan: "",
            authid: "",
            responsecode: "",
            responsestatus: ""
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

    useEffect(() => {
        submit()
    }, [])

    const submit = () => {
        let data = setDataObject(getValues())
        fetchList(data)
    }
    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
                <DateTimePickerFields
                    fieldName="transactiondatefrom"
                    type="date"
                    label="Date From"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <DateTimePickerFields
                    fieldName="transactiondateto"
                    type="date"
                    minDate={watch('transactiondatefrom')}
                    label="Date To"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputFields
                    fieldName="stan"
                    type="text"
                    label="STAN"
                    control={control}
                    pattern={numberRegex}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputFields
                    fieldName="authid"
                    type="text"
                    label="Auth ID"
                    control={control}
                    pattern={numberRegex}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <SelectFields
                    fieldName="responsecode"
                    label="Response Code"
                    control={control}
                    options={ubpsrespcodeFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <SelectFields
                    fieldName="responsestatus"
                    label="Response Status"
                    control={control}
                    options={requeststatus.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                />
            </Grid>


            <Grid item xs={12}>
                <ButtonContainer>
                    <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(submit)}>Search</Button>
                    <Button size="medium" variant="outlined" color="secondary" onClick={() => reset()}>Reset</Button>
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default SearchPanel;
