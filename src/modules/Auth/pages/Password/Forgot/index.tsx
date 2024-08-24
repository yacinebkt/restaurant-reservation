import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from '@/contexts/SnackbarContext';
import { useMutation } from '@tanstack/react-query';
import { handleForgot } from '@/modules/Auth/services';
import { formatError } from '@/helpers/error.helper';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import * as Yup from 'yup'; 
import { handleChange } from '@/helpers/formHelpers';
import AuthHeader from '@/modules/Auth/components/AuthHeader';

const ForgotPasswordPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { openSnackbar } = useSnackbar();

  const [values, setValues] = useState({
    email: '',
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
  });

  const { mutateAsync: forgotMutation, isLoading } = useMutation({
    mutationFn: handleForgot,
    onSuccess: async (data) => {
      if (data?.success) {
        navigate('/auth/password/reset', {
          state: {
            email: data?.email ? data?.email : '',
          },
        });
      }
    },
    onError(error) {
      openSnackbar({ message: formatError(error), status: 'error' });
    },
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: values.email,
    },
    validationSchema,
    onSubmit: async (values) => {
      await forgotMutation(values);
    },
  });

  return (
    <Box className=" w-full h-full min-h-screen bg-cover bg-center flex justify-center items-center">
      <Box className="p-4 md:p-6 flex flex-col gap-6 bg-white rounded-lg w-[90%] md:w-[560px] shadow-xl drop-shadow-md border ">
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
            helperText={formik.touched.email && t(formik.errors.email || '')}
          />

          <Stack direction="row" className="mb-6">
            <Typography color="primary" className="font-[500]">
              <Link
                to="/auth/signin"
                style={{
                  textDecoration: 'none',
                }}
              >
                {t('Do you want to comeback to login ?')}{' '}
              </Link>
            </Typography>
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            variant="contained"
            type="submit"
            loading={isLoading}
          >
            {t('Send')}
          </LoadingButton>
        </form>
      </Box>
    </Box>
  );
};

export default ForgotPasswordPage;
