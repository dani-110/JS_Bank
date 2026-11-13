import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DatePickerFields from "../../components/datePickerField";
import { alphanumericRegex, numberRegex, setDataObject } from "../../utils/Utils";
import { useSelector } from "react-redux";
import DateTimePickerFields from "../../components/dateTimePickerField";

const SearchPanel = (props) => {

    const { fetchList } = props
    const { respcodeFilter, requestFilter, channelFilter } = useSelector(state => state.filter)

    const defaultValues = useForm({
        defaultValues: {
            transactiondatefrom: "",
            transactiondateto: "",
            requestcode: "",
            respcode: "",
            nature: "",
            channelid: "",
            cid: "",
            mid: "",
            sourceaccount: "",
            destinationaccount: "",
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

    const submit = () => {
        let data = setDataObject(getValues())
        fetchList(data)
    }

    const nature = [
        { label: "Debit", value: '1' },
        { label: "Credit", value: '2' }
    ]

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
                    minDate={watch('transactiondatefrom')}
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
                <SelectFields
                    fieldName="channelid"
                    label="Channel"
                    control={control}
                    options={channelFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                />
            </Grid>


            <Grid item xs={12} md={3}>
                <InputFields
                    fieldName="cid"
                    type="text"
                    label="Consumer ID"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputFields
                    fieldName="mid"
                    type="text"
                    label="Merchant ID"
                    control={control}
                />
            </Grid>

            <Grid item xs={12} md={3}>
                <InputFields
                    fieldName="sourceaccount"
                    type="text"
                    label="Source Account"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <InputFields
                    fieldName="destinationaccount"
                    type="text"
                    label="Destination Account"
                    control={control}
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
                    <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(submit)} >Search</Button>
                    <Button size="medium" variant="contained" color="secondary" onClick={() => reset()}>Reset</Button>
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default SearchPanel;
