import { FormikProps, useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { DaDataAddress, DaDataSuggestion } from 'react-dadata';
import { useSelector, useDispatch } from 'react-redux';
import { CreateOrder } from '../../components';
import { RootState } from '../../services';
import {
  addOrder,
  editUserOrderAsync,
} from '../../services/UserOrdersService/UserOrdersService';
import { EditOrderContainerProps } from './EditOrderContainerProps';
import { editOrderSchema } from './editOrderSchema';

export type EditOrdersFormik = {
  description: string;
  dateStart: Date;
  address: DaDataSuggestion<DaDataAddress>;
};

const EditOrderContainer: FC<EditOrderContainerProps> = ({
  handleClose,
  selectedOrder,
}) => {
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const formik: FormikProps<EditOrdersFormik> = useFormik({
    initialValues: {
      description: selectedOrder.description,
      dateStart: selectedOrder.dateStart,
      address: {
        value: selectedOrder.address,
        unrestricted_value: '',
        data: {
          geo_lat: selectedOrder.addressLat,
          geo_lon: selectedOrder.addressLon,
        } as DaDataAddress,
      },
    },
    validationSchema: editOrderSchema,
    onSubmit: (values) => {
      if (user.id) {
        dispatch(editUserOrderAsync(values, selectedOrder.id, user.id));
        handleClose();
      }
    },
  });

  return <CreateOrder formik={formik} handleClose={handleClose} />;
};

export default EditOrderContainer;
