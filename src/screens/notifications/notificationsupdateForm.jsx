import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, IconButton } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {useTheme } from '@mui/material/styles';

const NotificationsUpdateForm = (props) => {
    const theme = useTheme()
    const [showPassword, setShowPassword] = useState(false);

    const defaultValues = useForm({
        defaultValues: {
            fromID: "",
            url: "",
            notificationType: "",
            loginId: "",
            password: "",
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



    const notificationType = [
        { label: 1, value: 'push' },
        { label: 2, value: 'email' },
        { label: 3, value: 'sms' },
        { label: 4, value: 'all' },
        { label: 5, value: 'push + email' },
        { label: 6, value: 'push + sms' },
        { label: 7, value: 'email + sms' },
    ]

    return <form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="url"
                        type="text"
                        label="URL"
                        control={control}
                        rules={{
                            required: "URL is required",
                        }}
                        error={errors?.url}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="fromID"
                        type="text"
                        label="From ID"
                        control={control}
                        rules={{
                            required: "From ID is required",
                        }}
                        error={errors?.fromID}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SelectFields
                        fieldName="notificationType"
                        label="Notification Type"
                        control={control}
                        rules={{
                            required: "Notification Type is required",
                        }}
                        options={notificationType.map((e) => {
                            return { label: e, value: e };
                        })}
                        error={errors?.notificationType}
                        
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="loginID"
                        type="text"
                        label="Login ID"
                        control={control}
                        rules={{
                            required: "Login ID is required",
                        }}
                        error={errors?.loginID}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="password"
                        label="Password"
                        control={control}
                        rules={{
                            required: "Password is required",
                        }}
                        error={errors?.password}
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <AiFillEyeInvisible color={theme.palette.textColor} /> : <AiFillEye color={theme.palette.textColor} />}
                                </IconButton>
                            ),
                        }}
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

export default NotificationsUpdateForm;
