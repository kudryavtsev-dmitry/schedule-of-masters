import { Box, CircularProgress } from '@material-ui/core';
import { FormikProps, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Orders } from '../../components';
import { RootState } from '../../services';
import {
  addOrder,
  loadUserOrdersAsync,
  removeUserOrder,
} from '../../services/UserOrdersService/UserOrdersService';
import { createOrderSchema } from '../CreateOrderContainer/createOrderSchema';

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

const OrdersContainer = () => {
  const [selectedCity, setSelectedCity] = useState<number>();

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const userOrders = useSelector((state: RootState) => state.userOrders);

  const handleRemoveUserOrder = (id: number) => {
    user.id && dispatch(removeUserOrder(id, user.id));
  };

  const handleSelectCity = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCity(event.target.value as number);
  };

  const handleClearCity = () => {
    setSelectedCity(undefined);
  };

  useEffect(() => {
    if (user.id) {
      dispatch(loadUserOrdersAsync(user.id));
    }
  }, []);

  if (userOrders.loading && user.loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 48px)"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Orders
      orders={userOrders.orders}
      handleRemoveUserOrder={handleRemoveUserOrder}
      selectedCity={selectedCity}
      handleSelectCity={handleSelectCity}
      handleClearCity={handleClearCity}
    />
  );
};

export default OrdersContainer;
