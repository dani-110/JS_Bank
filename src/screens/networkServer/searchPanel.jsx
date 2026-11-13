import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";

const SearchPanel = (props) => {


    const defaultValues = useForm({
        defaultValues: {
            serverID: "",
            serverName: "",
            ip: "",
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

    const server = []
    const serverType = ['WALLET', 'OPENAPI', 'GATEWAY']
    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="serverID"
                    type="text"
                    label="Server ID"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="serverName"
                    type="text"
                    label="Server Name"
                    control={control}
                    rules={{
                        required: "Server Name is required",
                    }}
                    error={errors?.serverName}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="ip"
                    type="text"
                    label="IP"
                    control={control}
                    rules={{
                        required: "IP is required",
                    }}
                    error={errors?.ip}
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
