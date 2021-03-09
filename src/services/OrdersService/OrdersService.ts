import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { api } from '../../utils';
import { ordersLoading, saveOrders } from './OrdersSlice';

export const loadOrdersAsync = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return async (dispatch) => {
    try {
      dispatch(ordersLoading());

      const { status, data } = await api.get('/orders');

      console.log(777, data);

      if (status === 200) {
        dispatch(saveOrders(data));
      }
    } catch (e) {
      console.log(666, e);
    }
  };
};
