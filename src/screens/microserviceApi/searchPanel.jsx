import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import SelectFields from "../../components/SelectFields";
const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            name: "",
            method: "",
            upStreamService: "",
            downStreamServics: ""
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


    const method = ["Get", "Post"]
    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
                <InputFields
                    fieldName="name"
                    type="text"
                    label="Name"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <SelectFields
                    fieldName="method"
                    label="Method"
                    control={control}
                    options={method.map((e) => {
                        return { label: e, value: e };
                    })}
                    
                />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <InputFields
                    fieldName="upStreamService"
                    type="text"
                    label="UpStream Service"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <InputFields
                    fieldName="downStreamServics"
                    type="text"
                    label="DownStream Servics"
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
