import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DateTimePickerFields from "../../components/dateTimePickerField";

const SearchPanel = (props) => {

    const defaultValues = useForm({
        defaultValues: {
            apiId: "",
            method: "",
            statusCode: "",
            requestDateTimeFrom: "",
            requestDateTimeTo: "",
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

    const method = ["Get", "Post"]
    const statusCode = ["400", "404", "500"]

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={2.4}>
                    <InputFields
                        fieldName="apiId"
                        type="text"
                        label="API ID"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={4} lg={2.4}>
                    <SelectFields
                        fieldName="method"
                        label="Method*"
                        control={control}
                        options={method.map((e) => {
                            return { label: e, value: e };
                        })}

                    />
                </Grid>
                <Grid item xs={12} md={4} lg={2.4}>
                    <SelectFields
                        fieldName="statusCode"
                        label="Status Code"
                        control={control}
                        options={statusCode.map((e) => {
                            return { label: e, value: e };
                        })}

                    />
                </Grid>
                <Grid item xs={12} md={6} lg={2.4}>
                    <DateTimePickerFields
                        fieldName="requestDateTimeFrom"
                        type="date"
                        label="Request Date Time From"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={2.4}>
                    <DateTimePickerFields
                        fieldName="requestDateTimeTo"
                        type="time"
                        label="Request Date Time To"
                        control={control}
                    />
                </Grid>

                {/* <Grid item xs={3}>
                    <DatePickerFields
                        fieldName="requestDateTo"
                        type="date"
                        label="Request Date To"
                        control={control}
                        rules={{
                            required: "Request Date To is required",
                        }}
                        error={errors?.requestDateTo}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TimePickerFields
                        fieldName="requestTimeTo"
                        type="time"
                        label="Request Time To"
                        control={control}
                        rules={{
                            required: "Request Time To is required",
                        }}
                        error={errors?.requestTimeTo}
                    />
                </Grid> */}
                <Grid item xs={12}>
                    <ButtonContainer>
                        <Button size="medium" variant="contained" color="primary" >Search</Button>
                        <Button size="medium" variant="contained" color="secondary" onClick={()=>reset()}>Reset</Button>
                    </ButtonContainer>
                </Grid>
            </Grid>
        </form>
    )
};

export default SearchPanel;
