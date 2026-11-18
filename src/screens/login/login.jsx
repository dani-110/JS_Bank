import { useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Typography,
  useTheme,
} from "@mui/material";

import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineArrowRight,
  AiOutlineBarChart,
  AiOutlineSafety,
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import { SlEnergy } from "react-icons/sl";
import { TbUsers } from "react-icons/tb";

import { useForm } from "react-hook-form";

import dashboardImage from "../../assests/qubits_dashboard.png";
import logoImage from "../../assests/logo.png";

import "./login.scss";
import InputFields from "../../components/InputFields";
import { useDispatch } from "react-redux";
import { fetchPublicKey } from "../../utils/Utils";
import { login } from "../../store/actions/auth";
import { allfilters } from "../../store/actions/filter";
import { getconfig } from "../../store/actions/systemParameter";
import { saveVersion, setIsLogin } from "../../store/reducers/auth-slice";
import { uiActions } from "../../store/reducers/ui-slice";

const Email = {
  required: "Email address is required",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address",
  },
};

const screen = {
  login: {
    heading: "Hi, Welcome Back.",
    description: "Enter your credentials to continue.",
    buttonText: "Login",
  },

  forgot: {
    heading: "Forgot your password?",
    description: "We'll help you get back into your workspace.",
    buttonText: "Send verification code",
  },

  contact: {
    heading: "Let's get you connected.",
    description: "Request access or get help from your administrator.",
    buttonText: "Send request",
  },
};

const Login = ({ onLogin, onForgotPassword, onContactAdmin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [pageMode, setPageMode] = useState("login");
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();

  const theme = useTheme()

  const {
    control,
    handleSubmit,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      fullName: "",
      email: "",
      message: "",
    },
  });

  const emailField = {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "jhon.doe@example.com",
    icon: <AiOutlineMail />,
    rules: Email,
  };

  const Fields = {
    login: [
      {
        name: "username",
        label: "Username or Email",
        type: "text",
        placeholder: "Enter username or email",
        icon: <AiOutlineMail size={19} strokeWidth={1.8} />,
        rules: {
          required: "Username or email is required",
        },
      },
      {
        name: "password",
        label: "Password",
        type: showPassword ? "text" : "password",
        placeholder: "Enter your password",
        icon: <AiOutlineLock size={19} />,
        rules: {
          required: "Password is required",
        },
        endIcon: (
          <IconButton
            size="small"
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((prev) => !prev)}
            edge="end"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </IconButton>
        ),
      },
    ],

    forgot: [emailField],

    contact: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        placeholder: "Jhon Doe",
        icon: <AiOutlineUser />,
        rules: {
          required: "Full name is required",
        },
      },
      emailField,
      {
        name: "message",
        label: "How can we help?",
        type: "text",
        placeholder: "Tell us what you need...",
        rules: {
          required: "Please enter your message",
        },
        multiline: true,
        rows: 3,
        className: "login-message",
      },
    ],
  };

  const renderField = (field) => (
    <Box key={field.name}>
      <Typography className="login-label">
        {field.label}
      </Typography>

      <InputFields
        fieldName={field.name}
        control={control}
        error={errors[field.name]}
        type={field.type}
        placeholder={field.placeholder}
        rules={field.rules}
        className={`login-input ${field.className || ""}`}
        multiline={field.multiline}
        rows={field.rows}
        slotProps={{
          input: {
            ...(field.icon && {
              startAdornment: (
                <InputAdornment position="start">{field.icon}</InputAdornment>
              ),
            }),
            ...(field.endIcon && {
              endAdornment: (
                <InputAdornment position="end">{field.endIcon}</InputAdornment>
              ),
            }),
          },
        }}
      />
    </Box>
  );

  const changePageMode = (mode) => {
    clearErrors();
    setPageMode(mode);
  };

  const handleFormSubmit = (data) => {
    const actions = {
      login: () =>
        onLogin?.({
          username: data.username,
          password: data.password,
          rememberMe,
        }),

      forgot: () =>
        onForgotPassword?.({
          email: data.email,
        }),

      contact: () =>
        onContactAdmin?.({
          fullName: data.fullName,
          email: data.email,
          message: data.message,
        }),
    };

    actions[pageMode]?.();
  };

  const features = [
    {
      icon: <SlEnergy />,
      label: "Faster Delivery",
    },
    {
      icon: <TbUsers />,
      label: "Better Collaboration",
    },
    {
      icon: <AiOutlineBarChart />,
      label: "Actionable Insights",
    },
  ];

  const currentScreen = screen[pageMode];

  const submit = async () => {
    setIsLoading(true)
    let data = getValues()
    data["salt"] = "30"
    data["audittrace"] = 'Qubits|Admin Panel|Login'
    data["actuser"] = data.username?.toLowerCase()
    data.password = await fetchPublicKey(data.password);
    if (!data.password) {
      console.error('Encryption failed');
      setIsLoading(false);
      return;
    }
    dispatch(login(data)).then((res) => {
      if (res.payload?.user?.responsecode == 0) {
        const filterObj = { actuser: res.payload.username?.toLowerCase() };
        dispatch(allfilters(filterObj)).then(res => {
          const data = {
            "configid": "",
            "audittrace": 'Qubits | Login'
          }
          dispatch(getconfig(data)).then((res) => {
            const obj = res.payload.list.find(val => val.entity == 'BO Portal Version')
            dispatch(saveVersion(obj))
            uiActions.showNotification({
              status: "success",
              title: "Authorized!",
              message: "Welcome to Qubits",
            })
            dispatch(setIsLogin())
            sessionStorage.setItem('wasHidden', true);
            setIsLoading(false);
          });

        })
      }
      else {
        setIsLoading(false);
      }

    })
  }

  return (
    <Box className="login-page">
      <Box className="login-header">
        <Box
          component="img"
          src={logoImage}
          alt="Qubits Logo"
          className="login-logo"
        />

        <Box className="login-header-actions">
          <Typography className="login-header-text">New here?</Typography>

          <Button
            onClick={() => changePageMode("contact")}
            endIcon={<AiOutlineArrowRight />}
            className="login-contact-button"
          >
            Contact Admin
          </Button>
        </Box>
      </Box>

      <Box className="login-main">
        <Box className="login-form-section">
          <Box sx={{ marginBottom: "32px", display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography sx={{ color: '#937ab7', fontWeight: '500', letterSpacing: '2px' }} variant="h6">
              WELCOME TO QUBITS PORTAL
            </Typography>

            <Typography variant="h1">
              {currentScreen.heading}
            </Typography>

            <Typography variant="body1" sx={{ color: '#617088' }}>
              {currentScreen.description}
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit(handleFormSubmit)}
            className="login-form"
          >
            {Fields[pageMode].map(renderField)}

            {pageMode === "login" && (
              <>
                <Box className="login-options">
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="login-checkbox"
                      />
                    }
                    label="Remember me"
                    className="login-remember"
                  />

                  <Button
                    type="button"
                    onClick={() => changePageMode("forgot")}
                    // className="login-forgot"
                    color="secondary"
                  >
                    Forgot Password?
                  </Button>
                </Box>
              </>
            )}

            <Button
              type="submit"
              fullWidth
              endIcon={<AiOutlineArrowRight />}
              className="login-submit"
              variant="contained" color="secondary"
              onClick={handleSubmit(submit)}
            >
              {isLoading && (
                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
              )}
              {currentScreen.buttonText}
            </Button>
            {pageMode === "login" && (
              <Box className="login-security-wrapper">
                <AiOutlineSafety />

                <Typography className="login-security">
                  Your workspace, securely connected.
                </Typography>
              </Box>
            )}

            {pageMode !== "login" && (
              <Button
                type="button"
                onClick={() => changePageMode("login")}
                startIcon={<AiOutlineArrowLeft />}
                className="login-back"
              >
                Back to login
              </Button>
            )}
          </Box>
        </Box>

        <Box className="login-promo">
          <Box sx={{ marginLeft: "120px", display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography sx={{ color: '#937ab7', fontWeight: '500', letterSpacing: '2px' }} variant="h6">
              YOUR WORK. CONNECTED.
            </Typography>

            <Typography sx={{ margin: '0px' }} variant="h1"> One workspace.</Typography>
            <Typography sx={{ margin: '0px' }} variant="h1" color={theme.palette.darkBaseColor} >Endless possibilities.</Typography>


            <Typography variant="body1" sx={{ color: '#617088' }}>
              Bring your people, projects and progress together.
            </Typography>
          </Box>

          <Box className="promo-image-wrapper">
            <Box
              component="img"
              src={dashboardImage}
              alt="Qubits Dashboard Preview"
              className="promo-image"
            />
          </Box>

          <Box className="promo-features">
            {features.map((feature) => (
              <Box key={feature.label} className="promo-feature">
                <Box className="promo-feature-icon">{feature.icon}</Box>

                <Typography className="promo-feature-label">
                  {feature.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className="login-footer">
        <Typography>© 2026 Qubits Informatics. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Login;
