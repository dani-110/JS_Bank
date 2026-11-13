import React from "react";
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
    const { respcodeFilter, requestFilter } = useSelector(state => state.filter)

    const defaultValues = useForm({
        defaultValues: {
            transactiondatefrom: "",
            transactiondateto: "",
            requestcode: "",
            respcode: "",
            nature: "",
            tranamount: "",
            rrn: "",
            stan: "",
            tranref: "",
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

    const nature = [
        { label: "Debit", value: '1' },
        { label: "Credit", value: '2' }
    ]
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
                    label="Transaction Date From"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <DateTimePickerFields
                    fieldName="transactiondateto"
                    type="date"
                    label="Transaction Date To"
                    control={control}
                />
            </Grid>

            <Grid item xs={12} md={3}>
                <SelectFields
                    fieldName="requestcode"
                    label="Request Code"
                    control={control}
                    options={requestFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}

                />
            </Grid>
            <Grid item xs={12} md={3}>
                <SelectFields
                    fieldName="respcode"
                    label="Response Code"
                    control={control}
                    options={respcodeFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <SelectFields
                    fieldName="nature"
                    label="Nature of Transaction"
                    control={control}
                    options={nature.map(({ label, value }) => {
                        return { label, value };
                    })}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputFields
                    fieldName="tranamount"
                    type="text"
                    label="Amount"
                    control={control}
                    pattern={numberRegex}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputFields
                    fieldName="rrn"
                    type="text"
                    label="RRN"
                    control={control}
                    pattern={numberRegex}
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
                    fieldName="tranref"
                    type="text"
                    label="Transaction Ref."
                    control={control}
                    pattern={alphanumericRegex}
                />
            </Grid>
            <Grid item xs={12}>
                <ButtonContainer>
                    <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(submit)}>Search</Button>
                    <Button size="medium" variant="contained" color="secondary" onClick={() => reset()}>Reset</Button>
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default SearchPanel;
