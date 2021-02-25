import { FormikProps, useFormik } from 'formik';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Registration } from '../../components';
import { signupAsync } from '../../services/UserService/UserServices';
import { RegistrationSchema } from './RegistrationShema';

export type FromikRegProps = {
  firstName: string;
  lastName: string;
  patronymic: string;
  role: number;
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
      role: 1,
      login: '',
      password: '',
    },

    validationSchema: RegistrationSchema,

    onSubmit: (values) => {
      dispatch(signupAsync(values));
    },
  });

  return <Registration formik={formik} />;
};

export default RegistrationContainer;
