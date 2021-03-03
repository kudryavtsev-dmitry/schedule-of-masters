import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { UserOrdersFormik } from '../../containers/OrdersContainer/OrdersContainer';
import { api } from '../../utils';
import { saveUserOrders, userOrdersLoading } from './UserOrdersSlice';

export const loadUserOrdersAsync = (
  id: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  console.log(2222);

  try {
    dispatch(userOrdersLoading());

    const { status, data } = await api.get(`/orders/${id}`);

    console.log(1111, data);

    if (status === 200) {
      dispatch(saveUserOrders(data));
    }
  } catch (e) {
    console.log(666, e);
  }
};

export const addOrder = (
  values: UserOrdersFormik,
  id: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    dispatch(userOrdersLoading());

    const { status, data } = await api.post('/orders', {
      ...values,
      user: id,
    });

    if (status === 200) {
      dispatch(loadUserOrdersAsync(id));
    }
  } catch (e) {
    console.log(666, e);
  }
};
