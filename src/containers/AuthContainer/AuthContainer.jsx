import { useFormik } from 'formik';
import React from 'react';
import { Auth } from '../../components';

const AuthContainer = () => {
  const formik = useFormik({
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
