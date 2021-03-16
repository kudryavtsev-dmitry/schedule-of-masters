import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Orders } from '../../components';
import { RootState } from '../../services';
import { Orders as OrderType } from '../../services/OrdersService/OrdersSlice';
import {
  loadUserOrdersAsync,
  removeUserOrder,
} from '../../services/UserOrdersService/UserOrdersService';

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
  const [selectedOrder, setSelectedOrder] = useState<OrderType>();

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const userOrders = useSelector((state: RootState) => state.userOrders);

  const handleRemoveUserOrder = (id: number) => {
    user.id && dispatch(removeUserOrder(id, user.id));
  };

  const handleSelectOrder = (order: OrderType) => {
    setSelectedOrder(order);
  };

  const handleClearSelectedOrder = () => {
    setSelectedOrder(undefined);
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
      handleSelectOrder={handleSelectOrder}
      handleClearSelectedOrder={handleClearSelectedOrder}
      selectedOrder={selectedOrder}
      orders={userOrders.orders}
      handleRemoveUserOrder={handleRemoveUserOrder}
    />
  );
};

export default OrdersContainer;
