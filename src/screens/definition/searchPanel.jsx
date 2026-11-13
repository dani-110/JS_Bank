import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import './style.scss'
const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            name: "",
            version: "",
            isHosted: ""
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

    const isHosted = ['True', 'False']
    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="name"
                    type="text"
                    label="Name"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="version"
                    type="text"
                    label="Version"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} lg={4}>
                <SelectFields
                    fieldName="isHosted"
                    label="Is Hosted"
                    control={control}
                    options={isHosted.map((e) => {
                        return { label: e, value: e };
                    })}
                    
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
