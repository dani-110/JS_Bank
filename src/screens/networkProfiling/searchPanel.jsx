import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";

const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            originatingChannel: '',
            destinationChannel: '',
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

    const originatingChannel = []
    const destinationChannel = []
    return <form>
        <Grid container spacing={2}>
           
            <Grid item xs={12} md={12} lg={6}>
                <SelectFields
                    fieldName="originatingChannel"
                    label="Originating Channel"
                    control={control}
                    options={originatingChannel.map((e) => {
                        return { label: e, value: e };
                    })}

                />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
                <SelectFields
                    fieldName="destinationChannel"
                    label="Destination Channel"
                    control={control}
                    options={destinationChannel.map((e) => {
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
