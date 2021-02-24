import { FormikProps, useFormik } from 'formik';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Registration } from '../../components';
import { signupAsync } from '../../services/UserService/UserServices';

export type FromikRegProps = {
  firstName: string;
  lastName: string;
  patronymic: string;
  role: string;
  login: string;
  password: string;
};

const RegistrationContainer = () => {
  const dispatch = useDispatch();

  const formik: FormikProps<FromikRegProps> = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      patronymic: '',
      role: '',
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(signupAsync(values));
    },
  });

  return <Registration formik={formik} />;
};

export default RegistrationContainer;
