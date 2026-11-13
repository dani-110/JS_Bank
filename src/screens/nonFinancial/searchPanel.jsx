import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Grid, TextField } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DateTimePickerFields from "../../components/dateTimePickerField";

const SearchPanel = (props) => {

    const defaultValues = useForm({
        defaultValues: {
            loggingDateTimeFrom: "",
            loggingDateTimeTo: "",
            merchantId: "",
            legalName: "",
            ownerType: "",
            nationalId: "",
            taxId: "",
            contactNo: "",
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

    const ownerType = ["Sole Proprietor/Partnership", "Limited Company"]

    return <form>
        <Grid container spacing={2} sx={{ marginBottom: '10px' }}>
            <Grid item xs={12} md={6} lg={3}>
                <DateTimePickerFields
                    fieldName="loggingDateTimeFrom"
                    type="date"
                    label="Logging Date Time From"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <DateTimePickerFields
                    fieldName="loggingDateTimeTo"
                    type="time"
                    label="Logging Date Time To"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <InputFields
                    fieldName="merchantId"
                    type="text"
                    label="Merchant ID"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <InputFields
                    fieldName="legalName"
                    type="text"
                    label="Legal Name"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <SelectFields
                    fieldName="ownerType"
                    label="Owner Type"
                    control={control}
                    options={ownerType.map((e) => {
                        return { label: e, value: e };
                    })}
                    
                />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <InputFields
                    fieldName="nationalId"
                    type="text"
                    label="national ID"
                    control={control}
                />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <InputFields
                    fieldName="taxId"
                    type="text"
                    label="Tax ID"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <InputFields
                    fieldName="contactNo"
                    type="text"
                    label="Contact No"
                    control={control}
                />
            </Grid>

        </Grid>


        <Grid container spacing={2}>
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
