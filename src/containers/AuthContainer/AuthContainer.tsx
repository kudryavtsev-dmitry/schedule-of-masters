import { FormikProps, useFormik } from 'formik';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Auth } from '../../components';
import { signinAsync } from '../../services/UserService/UserServices';
import { AuthSchema } from './AuthSchema';

export type FormikAuth = {
  login: string;
  password: string;
};

const AuthContainer: FC = () => {
  const dispatch = useDispatch();

  const formik: FormikProps<FormikAuth> = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: AuthSchema,
    onSubmit: (values) => {
      dispatch(signinAsync(values));
    },
  });
  return <Auth formik={formik} />;
};

export default AuthContainer;
