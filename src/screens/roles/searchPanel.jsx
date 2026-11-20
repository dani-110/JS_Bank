import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import DatePickerFields from "../../components/datePickerField";
import { setDataObject } from "../../utils/Utils";
import DateTimePickerFields from "../../components/dateTimePickerField";

const SearchPanel = (props) => {
    const { fetchList } = props


    const defaultValues = useForm({
        defaultValues: {
            rolename: "",
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

    const submit = () => {
        let data = setDataObject(getValues())
        fetchList(data)
    }

    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
                <InputFields
                    fieldName="rolename"
                    type="text"
                    label="Role Name"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <DateTimePickerFields
                    fieldName="creationdatefrom"
                    type="date"
                    label="Creation Date From"
                    control={control}
                />

            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <DateTimePickerFields
                    fieldName="creationdateto"
                    type="date"
                    label="Creation Date To"
                    minDate={watch('creationdatefrom')}
                    control={control}
                />

            </Grid>

            <Grid item xs={12}>
                <ButtonContainer>
                    <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(submit)} >Search</Button>
                    <Button size="medium" variant="outlined" color="secondary" onClick={() => reset()}>Reset</Button>
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default SearchPanel;
