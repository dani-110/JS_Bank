import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DateTimePickerFields from "../../components/dateTimePickerField";
import { alphanumericRegex, alphaRegex, numberRegex, setDataObject } from "../../utils/Utils";
import { useSelector } from "react-redux";
import DatePickerFields from "../../components/datePickerField";

const SearchPanel = (props) => {
    const { fetchList } = props

    const { respcodeFilter, requestFilter, trannatureFilter, uiuserFilter } = useSelector(state => state.filter)
    const defaultValues = useForm({
        defaultValues: {
            "activitydatefrom": "",
            "activitydateto": "",
            "makerid": "",
            "checkerid": "",
            "adjustedtransactiontype": "",
            "status": "",
            "nature": "",
            "nationalid": "",
            "mobileno": "",
            "tranrefnumber": "",

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
                    <DatePickerFields
                        fieldName="activitydatefrom"
                        type="date"
                        label="Transaction Date From"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <DatePickerFields
                        fieldName="activitydateto"
                        type="date"
                        minDate={watch('activitydatefrom')}
                        label="Transaction Date To"
                        control={control}
                    />
                </Grid>

                <Grid item xs={12} md={3}>
                    <SelectFields
                        fieldName="makerid"
                        label="Maker"
                        control={control}
                        options={uiuserFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}

                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <SelectFields
                        fieldName="checkerid"
                        label="Checker"
                        control={control}
                        options={uiuserFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}

                    />
                </Grid>
                {/* <Grid item xs={12} md={3}>
                    <SelectFields
                        fieldName="adjustedtransactiontype"
                        label="Adjusted Transaction Type"
                        control={control}
                        options={requestFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}

                    />
                </Grid>

                <Grid item xs={12} md={3}>
                    <SelectFields
                        fieldName="status"
                        label="Status"
                        control={control}
                        options={respcodeFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}

                    />
                </Grid> */}
                <Grid item xs={12} md={3}>
                    <SelectFields
                        fieldName="nature"
                        label="Nature"
                        control={control}
                        options={trannatureFilter?.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}

                    />
                </Grid>

                <Grid item xs={12} md={3}>
                    <InputFields
                        fieldName="tranrefnumber"
                        type="text"
                        label="Tran Ref Num."
                        control={control}
                        pattern={alphanumericRegex}
                    />
                </Grid>

                {/* <Grid item xs={12} md={3}>
                    <InputFields
                        fieldName="nationalid"
                        type="text"
                        label="National ID"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputFields
                        fieldName="mobileno"
                        type="text"
                        label="Mobile No"
                        control={control}
                    />
                </Grid> */}
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
