import { useFormik } from 'formik';
import React from 'react';
import { Registration } from '../../components';

const RegistrationContainer = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      patronymic: '',
      role: null,
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(22222, values);
    },
  });

  return <Registration formik={formik} />;
};

export default RegistrationContainer;
