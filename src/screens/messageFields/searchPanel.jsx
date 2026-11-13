import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            name: "",
            dataType: ""
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



    return <form>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <InputFields
                        fieldName="name"
                        type="text"
                        label="Name"
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputFields
                        fieldName="dataType"
                        type="text"
                        label="Data Type"
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
