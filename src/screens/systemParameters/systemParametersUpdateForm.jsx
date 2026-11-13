import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";

const SystemParametersUpdateForm = (props) => {

    const defaultValues = useForm({
        defaultValues: {
            entity: "",
            value: ""
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


    const entity = []

    return <form>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <SelectFields
                    fieldName="entity"
                    label="Entity"
                    control={control}
                    options={entity.map((e) => {
                        return { label: e, value: e };
                    })}
                    
                />
            </Grid>
            <Grid item xs={6}>
                <InputFields
                    fieldName="value"
                    type="text"
                    label="Value"
                    control={control}
                />
            </Grid>
            <Grid item xs={12}>
                <ButtonContainer isSingle>
                    <Button size="medium" variant="contained" color="primary" >Save</Button>
                    
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default SystemParametersUpdateForm;
