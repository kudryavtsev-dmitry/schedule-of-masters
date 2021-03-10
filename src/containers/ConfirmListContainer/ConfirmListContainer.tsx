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

  const orders = useSelector((state: RootState) => state.orders.orders);

  useEffect(() => {
    dispatch(loadOrdersAsync());
  }, []);

  return (
    <ConfirmList
      orders={orders}
      id={id}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
    />
  );
};

export default ConfirmListContainer;
