import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            channel: "",
            keyType: ""
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

    const channel = []
    const keyType = ['ZMK', 'TPK', 'LMK']


    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <SelectFields
                    fieldName="channel"
                    label="Channel"
                    control={control}
                    options={channel.map((e) => {
                        return { label: e, value: e };
                    })}
                    
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <SelectFields
                    fieldName="keyType"
                    label="Key Type"
                    control={control}
                    options={keyType.map((e) => {
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
