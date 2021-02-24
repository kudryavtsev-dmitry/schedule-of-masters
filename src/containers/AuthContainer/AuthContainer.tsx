import { FormikProps, useFormik } from 'formik';
import React, { FC } from 'react';
import { Auth } from '../../components';

export type FormikAuth = {
  login: string;
  password: string;
};

const AuthContainer: FC = () => {
  const formik: FormikProps<FormikAuth> = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(1111, values);
    },
  });
  return <Auth formik={formik} />;
};

export default AuthContainer;
