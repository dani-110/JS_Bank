import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, CircularProgress, Divider, Grid, IconButton, Typography } from "@mui/material";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import { useTheme } from '@mui/material/styles';

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { fetchPublicKey, setDataObject } from "../../utils/Utils";
import { uiActions } from "../../store/reducers/ui-slice";
import { setpassword } from "../../store/actions/users";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";

const ChangePassword = (props) => {
    const { data, setOpen, type } = props
    const theme = useTheme()
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [showReEnterPassword, setShowReEnterPassword] = useState(false);

    const defaultValues = useForm({
        defaultValues: {
            password: "",
            reenterpassword: "",
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

    const submit = async () => {
        let obj = setDataObject(getValues())
        if (obj.password !== obj.reenterpassword) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Failed!",
                message: 'Password are not match!',
            }))
            return
        }
        setIsLoading(true)
        if (data?.userid) {
            obj['userid'] = data.userid
            console.log(obj, data)
            delete obj.reenterpassword
            obj.password = await fetchPublicKey(obj.password);
            if (!obj.password) {
                console.error('Encryption failed');
                setIsLoading(false);
                return;
            }
            obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + '|Save'
            dispatch(setpassword(obj)).then((res) => {
                if (res.payload) {
                    setOpen(false)
                    console.log(res.payload)
                }
                setIsLoading(false)
            })
        }
    }

    return <>
        <Typography variant='h2' sx={{ margin: '10px', textAlign: 'left', fontWeight: '500' }}>{'Change password'}</Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', margin: '10px 10px 20px', }} color={'#617088'}>{data['username']}</Typography>
        <form style={{ padding: '10px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputFields
                        fieldName="password"
                        type={showPassword ? "text" : "password"}
                        label="New Password"
                        control={control}
                        error={errors.password}
                        inputProps={{
                            endAdornment: (
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <AiFillEyeInvisible color={theme.palette.textColor} /> : <AiFillEye color={theme.palette.textColor} />}
                                </IconButton>
                            ),
                        }}
                        rules={{
                            required: "New Password is required",
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputFields
                        fieldName="reenterpassword"
                        type={showReEnterPassword ? "text" : "password"}
                        label="Re Enter Password"
                        control={control}
                        error={errors.reenterpassword}
                        inputProps={{
                            endAdornment: (
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowReEnterPassword(!showReEnterPassword)}
                                >
                                    {showReEnterPassword ? <AiFillEyeInvisible color={theme.palette.textColor} /> : <AiFillEye color={theme.palette.textColor} />}
                                </IconButton>
                            ),
                        }}
                        rules={{
                            required: "Re-Enter Password is required",
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ margin: '10px', bgcolor: '#617088' }} />
                </Grid>

                <Grid item xs={12}>
                    <ButtonContainer >
                        <Button size="medium" variant="outlined" color="secondary" disabled={isLoading}
                            onClick={() => setOpen(false)}>
                            Cancel</Button>
                        <Button size="medium" variant="contained" color="secondary" disabled={isLoading}
                            onClick={handleSubmit(submit)}>
                            {isLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}
                            Save</Button>
                    </ButtonContainer>
                </Grid>


            </Grid>
        </form>
    </>
};

export default ChangePassword;
