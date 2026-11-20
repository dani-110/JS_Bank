import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import SelectFields from "../../components/SelectFields";
import { useDispatch, useSelector } from "react-redux";
import {
  emailRegex,
  fetchPublicKey,
  filterName,
  numberRegex,
  setDataObject,
} from "../../utils/Utils";
import { createuser, edituser } from "../../store/actions/users";
import {
  createUsersRecord,
  updateUsersRecord,
} from "../../store/reducers/users-slice";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useTheme } from "@emotion/react";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
// import { JSEncrypt } from "jsencrypt";
// import publicKey from '../../public.pem'

const UsersUpdateForm = (props) => {
  const { data, setOpen, type } = props;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { departmentFilter, uiroleFilter } = useSelector(
    (state) => state.filter,
  );

  const breadCrumCtxt = useContext(BreadCrumSelectorContext);
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();

  const defaultValues = useForm({
    defaultValues: {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      mobileno: "",
      employeeid: "",
      isnotification: "",
      status: "",
      departmentid: "",
      roleid: "",
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

  useEffect(() => {
    console.log(data);
    if (data?.userid) {
      resetField("status", { defaultValue: data?.status });
      resetField("departmentid", { defaultValue: data?.departmentid });
      resetField("roleid", { defaultValue: data?.rid });
      resetField("firstname", { defaultValue: data?.firstname });
      resetField("lastname", { defaultValue: data?.lastname });
      resetField("email", { defaultValue: data?.email });
      resetField("mobileno", { defaultValue: data?.mobileno });
      resetField("employeeid", { defaultValue: data?.employeeid });
    }
  }, []);

  const submit = async () => {
    setIsLoading(true);
    let obj = setDataObject(getValues());
    if (data?.userid) {
      obj["userid"] = data.userid;
      Object.keys(obj).map((e) => obj[e] == "" && delete obj[e]);
      obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join("|") + "|Save";
      dispatch(edituser(obj)).then((res) => {
        if (res.payload) {
          setOpen(false);
          delete obj["actuser"];

          data["rid"] = obj.roleid;
          data["departmentidValue"] = filterName(
            departmentFilter,
            obj.departmentid,
          );
          delete obj["roleid"];
          const objSave = { ...data, ...obj };
          breadCrumCtxt.lastItemRemove();
          dispatch(updateUsersRecord(objSave));
        }
        setIsLoading(false);
      });
    } else {
      obj.password = await fetchPublicKey(obj.password);
      if (!obj.password) {
        console.error("Encryption failed");
        setIsLoading(false);
        return;
      }
      obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join("|") + "|Save";
      dispatch(createuser(obj)).then((res) => {
        if (res.payload) {
          console.log(res.payload.userCheckCustomList[0]);
          const data = {
            ...res.payload.userCheckCustomList[0],
          };
          data["departmentidValue"] = filterName(
            departmentFilter,
            data.departmentid,
          );
          breadCrumCtxt.lastItemRemove();
          dispatch(createUsersRecord(res.payload.userCheckCustomList[0]));
          setOpen(false);
        }
        setIsLoading(false);
      });
    }
  };

  const status = [
    {
      label: "Active",
      value: "1",
    },
    {
      label: "Inactive",
      value: "0",
    },
  ];
  const notificationAllowed = [
    {
      label: "Yes",
      value: "1",
    },
    {
      label: "No",
      value: "0",
    },
  ];

  return (
    <>
      <Typography
        variant="h2"
        sx={{ margin: "10px", textAlign: "left", fontWeight: "500" }}
      >
        {type=="Edit"?("Edit user"):"Create User"}
      </Typography>
      {type=="Edit" &&
        <Typography
          variant="body1"
          sx={{ textAlign: "left", margin: "10px 10px 20px" }}
          color={"#617088"}
        >
          {data["username"]}
        </Typography>
      }
      <form style={{ padding: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <InputFields
              fieldName="firstname"
              type="text"
              label="First Name"
              control={control}
              rules={{
                required: "First Name is required",
              }}
              error={errors?.firstname}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputFields
              fieldName="lastname"
              type="text"
              label="Last Name"
              control={control}
            />
          </Grid>
          {type !== "Edit" && (
            <>
              <Grid item xs={12} md={6}>
                <InputFields
                  fieldName="username"
                  type="text"
                  label="Username"
                  control={control}
                  rules={{
                    required: "Username is required",
                  }}
                  error={errors?.username}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <InputFields
                  fieldName="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  control={control}
                  error={errors.password}
                  inputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <AiFillEyeInvisible color={theme.palette.textColor} />
                        ) : (
                          <AiFillEye color={theme.palette.textColor} />
                        )}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <SelectFields
                  fieldName="isnotification"
                  label="Notification Allowed"
                  control={control}
                  options={notificationAllowed.map(({ label, value }) => {
                    return { label, value };
                  })}
                />
              </Grid>
            </>
          )}
          <Grid item xs={12} md={6}>
            <InputFields
              fieldName="email"
              type="text"
              label="Email"
              control={control}
              pattern={emailRegex}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputFields
              fieldName="mobileno"
              type="text"
              label="Mobile No"
              control={control}
              pattern={numberRegex}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputFields
              fieldName="employeeid"
              type="text"
              label="Employee ID"
              control={control}
              pattern={numberRegex}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectFields
              fieldName="status"
              label="Status"
              control={control}
              options={status.map(({ label, value }) => {
                return { label, value };
              })}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectFields
              fieldName="departmentid"
              label="Department"
              control={control}
              options={departmentFilter.map(({ displayvalue, codevalue }) => {
                return { label: displayvalue, value: codevalue };
              })}
              rules={{
                required: "Department is required",
              }}
              error={errors?.departmentid}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectFields
              fieldName="roleid"
              label="Role"
              control={control}
              options={uiroleFilter.map(({ displayvalue, codevalue }) => {
                return { label: displayvalue, value: codevalue };
              })}
              rules={{
                required: "Role is required",
              }}
              error={errors?.roleid}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ margin: "10px", bgcolor: "#617088" }} />
          </Grid>

          <Grid item xs={12}>
            <ButtonContainer>
              <Button
                size="medium"
                variant="outlined"
                color="secondary"
                disabled={isLoading}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                disabled={isLoading}
                onClick={handleSubmit(submit)}
              >
                {isLoading && (
                  <CircularProgress
                    size={20}
                    sx={{ marginRight: 1, color: "#fff" }}
                  />
                )}
                Save
              </Button>
            </ButtonContainer>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default UsersUpdateForm;
