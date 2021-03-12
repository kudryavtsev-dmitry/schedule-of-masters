import { FormikProps, useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { DaDataAddress, DaDataSuggestion } from 'react-dadata';
import { useSelector, useDispatch } from 'react-redux';
import { CreateOrder } from '../../components';
import { RootState } from '../../services';
import { addOrder } from '../../services/UserOrdersService/UserOrdersService';
import { CreateOrderContainerProps } from './CreateOrderContainerProps';
import { createOrderSchema } from './createOrderSchema';

export type CreateOrdersFormik = {
  description: string;
  dateStart: Date;
  address: DaDataSuggestion<DaDataAddress>;
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

  const formik: FormikProps<CreateOrdersFormik> = useFormik({
    initialValues: {
      description: '',
      dateStart: new Date(),
      address: { value: '', unrestricted_value: '', data: {} as DaDataAddress },
    },
    validationSchema: createOrderSchema,
    onSubmit: (values) => {
      if (user.id) {
        console.log(22222, values);
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
