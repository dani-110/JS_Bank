import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import Card from "../../components/card/Card";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            channelID: "",
            transformationID: ""
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

    const channelID = []
    const transformationID = []


    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <SelectFields
                    fieldName="channelID"
                    label="Channel ID"
                    control={control}
                    options={channelID.map((e) => {
                        return { label: e, value: e };
                    })}
                    
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <SelectFields
                    fieldName="transformationID"
                    label="Transformation ID"
                    control={control}
                    options={transformationID.map((e) => {
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
