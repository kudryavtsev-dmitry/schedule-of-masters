import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ConfirmList } from '../../components';
import { RootState } from '../../services';
import { loadOrdersAsync } from '../../services/OrdersService/OrdersService';

const ConfirmListContainer = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState<number>();

  const handleClickOpen = (id: number) => {
    setId(id);
  };

  const handleClose = () => {
    setId(undefined);
  };

  const orders = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    dispatch(loadOrdersAsync());
  }, []);

  if (orders.loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 48px)"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ConfirmList
      orders={orders.orders}
      id={id}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
    />
  );
};

export default ConfirmListContainer;
