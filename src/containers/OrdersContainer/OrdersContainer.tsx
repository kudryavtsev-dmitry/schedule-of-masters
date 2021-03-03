import { FormikProps, useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Orders } from '../../components';
import { RootState } from '../../services';
import {
  addOrder,
  loadUserOrdersAsync,
} from '../../services/UserOrdersService/UserOrdersService';

export type UserOrdersFormik = {
  description: string;
  dateStart: Date;
};

const OrdersContainer = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const userOrders = useSelector((state: RootState) => state.userOrders);

  const formik: FormikProps<UserOrdersFormik> = useFormik({
    initialValues: {
      description: '',
      dateStart: new Date(),
    },
    onSubmit: (values) => {
      if (user.id) {
        dispatch(addOrder(values, user.id));
      }
    },
  });

  useEffect(() => {
    if (user.id) {
      dispatch(loadUserOrdersAsync(user.id));
    }
  }, []);

  return <Orders orders={userOrders.orders} formik={formik} />;
};

export default OrdersContainer;
