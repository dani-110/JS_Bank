import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";

const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            CNIC: "",
            riskStatus: "",
            merchantID:""
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

    const riskStatus = ['High', 'Medium', 'Low']
    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="firstName"
                    type="text"
                    label="First Name"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="lastName"
                    type="text"
                    label="Last Name"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="CNIC"
                    type="text"
                    label="CNIC"
                    control={control}
                />
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
                <SelectFields
                    fieldName="riskStatus"
                    label="Risk Status"
                    control={control}
                    options={riskStatus.map((e) => {
                        return { label: e, value: e };
                    })}

                />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <InputFields
                    fieldName="merchantID"
                    type="text"
                    label="Merchant ID"
                    control={control}
                />
            </Grid>

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
