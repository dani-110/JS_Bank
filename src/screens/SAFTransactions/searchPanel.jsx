import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DateTimePickerFields from "../../components/dateTimePickerField";
import { useSelector } from "react-redux";
import { numberRegex, setDataObject } from "../../utils/Utils";

const SearchPanel = (props) => {
    const { fetchList } = props
    const { safstatusFilter, respcodeFilter, requestFilter } = useSelector(state => state.filter)

    const defaultValues = useForm({
        defaultValues: {
            transactiondatefrom: "",
            transactiondateto: "",
            stan: "",
            rrn: "",
            safstatus: "",
            requestcode: "",
            respcode: ""
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
                    fieldName="rrn"
                    type="text"
                    label="RRN"
                    control={control}
                    pattern={numberRegex}
                />
            </Grid>

            <Grid item xs={12} md={3}>
                <SelectFields
                    fieldName="safstatus"
                    label="SAF Status"
                    control={control}
                    options={safstatusFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                />
            </Grid>

            <Grid item xs={12} md={3}>
                <SelectFields
                    fieldName="requestcode"
                    label="Transactions"
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
