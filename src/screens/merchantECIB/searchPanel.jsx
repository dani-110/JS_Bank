import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DateTimePickerFields from "../../components/dateTimePickerField";
import { useSelector } from "react-redux";
import { alphanumericRegex, idRegex, numberRegex, phoneRegex, setDataObject } from "../../utils/Utils";

const SearchPanel = (props) => {
    const { fetchList } = props

    const { taxFilter, riskFilter } = useSelector(state => state.filter)

    const defaultValues = useForm({
        defaultValues: {
            merchantid: "",
            merchantlegalname: "",
            nationalid: "",
            taxid: "",
            contact: "",
            mobileno: "",
            phonenumber: "",
            email: "",
            risk: "",
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
       data["kycstagestatus"] = 6
        console.log(data)
        fetchList(data)
    }

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="merchantid"
                        type="text"
                        label="Merchant ID"
                        control={control}
                        pattern={numberRegex}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="merchantlegalname"
                        type="text"
                        label="Legal Name"
                        control={control}
                        pattern={alphanumericRegex}
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
                    {/* <SelectFields
                        fieldName="taxid"
                        label="Tax ID"
                        control={control}
                        options={taxFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}
                    /> */}
                    <InputFields
                        fieldName="taxid"
                        type="text"
                        label="Tax ID"
                        control={control}
                        pattern={idRegex}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="contact"
                        type="text"
                        label="Contact No"
                        control={control}
                        pattern={phoneRegex}
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
                        fieldName="phonenumber"
                        type="text"
                        label="Phone No"
                        control={control}
                        pattern={phoneRegex}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="email"
                        type="text"
                        label="Email"
                        control={control}
                        rules={{
                            pattern: {
                                value:
                                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi,
                                message: "Incorrect Email",
                            }
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <SelectFields
                        fieldName="risk"
                        label="Risk"
                        control={control}
                        options={riskFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}

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
