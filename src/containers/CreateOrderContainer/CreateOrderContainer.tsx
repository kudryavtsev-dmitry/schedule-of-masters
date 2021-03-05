import { FormikProps, useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CreateOrder } from '../../components';
import { RootState } from '../../services';
import { addOrder } from '../../services/UserOrdersService/UserOrdersService';
import { CreateOrderContainerProps } from './CreateOrderContainerProps';
import { createOrderSchema } from './createOrderSchema';

export type UserOrdersFormik = {
  description: string;
  dateStart: Date;
  cityLocation: number;
  district: number;
  street: string;
  homeNumber: string;
  entrance: string;
  floor: string;
  apartNumber: string;
};

const CreateOrderContainer: FC<CreateOrderContainerProps> = ({
  handleClose,
  handleClearCity,
  handleSelectCity,
  selectedCity,
}) => {
  const user = useSelector((state: RootState) => state.user);

  const locations = useSelector(
    (state: RootState) => state.locations.locations
  );

  const dispatch = useDispatch();

  const formik: FormikProps<UserOrdersFormik> = useFormik({
    initialValues: {
      description: '',
      dateStart: new Date(),
      cityLocation: 0,
      district: 0,
      street: '',
      homeNumber: '',
      entrance: '',
      floor: '',
      apartNumber: '',
    },
    validationSchema: createOrderSchema,
    onSubmit: (values) => {
      if (user.id) {
        dispatch(addOrder(values, user.id));
        // formik.handleReset();
      }
    },
  });

  return (
    <CreateOrder
      formik={formik}
      handleClose={handleClose}
      handleSelectCity={handleSelectCity}
      handleClearCity={handleClearCity}
      locations={locations}
      selectedCity={selectedCity}
    />
  );
};

export default CreateOrderContainer;
