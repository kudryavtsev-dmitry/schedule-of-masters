import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmList } from '../../components';
import { RootState } from '../../services';
import { loadOrdersAsync } from '../../services/OrdersService/OrdersService';

const ConfirmListContainer = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const orders = useSelector((state: RootState) => state.orders.orders);

  useEffect(() => {
    dispatch(loadOrdersAsync());
  }, []);

  return (
    <ConfirmList
      orders={orders}
      open={open}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
    />
  );
};

export default ConfirmListContainer;
