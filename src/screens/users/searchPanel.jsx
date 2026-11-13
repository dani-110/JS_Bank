import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DateTimePickerFields from "../../components/dateTimePickerField";
import { emailRegex, numberRegex, setDataObject } from "../../utils/Utils";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const SearchPanel = (props) => {
    const { fetchList } = props
    const { departmentFilter, uiroleFilter } = useSelector(state => state.filter)

    const defaultValues = useForm({
        defaultValues: {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            mobileno: "",
            departmentid: "",
            roleid: "",
            islogin: "",
            creationdatefrom: "",
            creationdateto: "",
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

    const YesNo = [
        { label: "Yes", value: '1' },
        { label: "No", value: '0' }
    ]

    const submit = () => {
        let data = setDataObject(getValues())
        fetchList(data)
    }

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="firstname"
                        type="text"
                        label="First Name"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="lastname"
                        type="text"
                        label="Last Name"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="username"
                        type="text"
                        label="Username"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="email"
                        type="text"
                        label="Email"
                        control={control}
                        pattern={emailRegex}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <InputFields
                        fieldName="mobileno"
                        type="text"
                        label="Mobile No"
                        control={control}
                        pattern={numberRegex}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <SelectFields
                        fieldName="departmentid"
                        label="Department"
                        control={control}
                        options={departmentFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}

                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <SelectFields
                        fieldName="roleid"
                        label="Role"
                        control={control}
                        options={uiroleFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
                        })}

                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <SelectFields
                        fieldName="islogin"
                        label="Is Login"
                        control={control}
                        options={YesNo.map(({ label, value }) => {
                            return { label: label, value: value };
                        })}
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <DateTimePickerFields
                        fieldName="creationdatefrom"
                        label="Creation Date From"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DateTimePickerFields
                        fieldName="creationdateto"
                        label="Creation Date To"
                        minDate={watch('creationdatefrom')}
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
