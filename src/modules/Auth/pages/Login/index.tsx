import React, { useState, MouseEvent } from 'react';
import { Box, IconButton, InputAdornment, TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSnackbar } from '@/contexts/SnackbarContext';
import { useAuth } from '@/modules/Auth/contexts';
import { useMutation } from '@tanstack/react-query';
import { handleLogin } from '@/modules/Auth/services';
import { formatError } from '@/helpers/error.helper';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { handleChange } from '@/helpers/formHelpers';
import { LoadingButton } from '@mui/lab';
import AuthHeader from '../../components/AuthHeader';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  const { storUserData } = useAuth();
  const { openSnackbar } = useSnackbar();

  const { mutateAsync: loginMutation, isLoading } = useMutation({
    mutationFn: handleLogin,
    onSuccess: async (data) => {
      let { user, refreshToken, accessToken } = data;
      if (user && refreshToken && accessToken) {
        storUserData(user, accessToken, refreshToken);
      }
    },
    onError(error: any) {
      openSnackbar({ message: formatError(error), status: 'error' });
    },
  });

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string().required('Password is required'),
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: values.email,
      password: values.password,
    },
    validationSchema,
    onSubmit: async (values) => {
      await loginMutation(values);
    },
  });

  // Function to autofill the test credentials
  const handleAutoFill = () => {
    setValues({
      ...values,
      email: 'test@gmail.com',
      password: 'test_123456',
    });
    formik.setFieldValue('email', 'test@gmail.com');
    formik.setFieldValue('password', 'test_123456');
  };

  return (
    <Box className="w-full h-full min-h-screen bg-cover bg-center flex justify-center items-center">
      <Box className="p-4 md:p-6 flex flex-col gap-6 bg-white rounded-lg w-[90%] md:w-[520px] shadow-xl drop-shadow-md border ">
        <AuthHeader />

        <Box className="flex justify-center items-center pt-1">
          <Typography className="text-2xl font-semibold text-[#222]">{t('Log in')}</Typography>
        </Box>

        <form
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-5 justify-center w-full"
        >
          <TextField
            autoFocus
            fullWidth
            id="email"
            name="email"
            label={t('Email')}
            type="email"
            value={values.email}
            onChange={(e) => handleChange(e, setValues)}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && t(formik.errors.email as string)}
          />

          <TextField
            id="password"
            name="password"
            label={t('Password')}
            fullWidth
            value={values.password}
            onChange={(e) => handleChange(e, setValues)}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && t(formik.errors.password as string)}
            type={values.showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    aria-label="toggle password visibility"
                  >
                    {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* <Stack direction="row" className="mb-4">
            <Typography color="primary" className="font-[500]">
              <Link
                to="/auth/password/forgot"
                style={{
                  textDecoration: 'none',
                }}
              >
                {t('Forgotten password ?')}
              </Link>
            </Typography>
          </Stack> */}

          <Box className="flex flex-col gap-3">

          <LoadingButton
            fullWidth
            size="large"
            variant="contained"
            type="submit"
            loading={isLoading}
          >
            {t('Login')}
          </LoadingButton>

          {/* Autofill Button */}
          <Button
            fullWidth
            size="large"
            variant="outlined"
            onClick={handleAutoFill}
          >
            {t('Auto Fill Test Credentials')}
          </Button>
          </Box>

        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
