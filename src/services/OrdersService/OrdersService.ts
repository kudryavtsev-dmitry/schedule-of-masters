import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { FormikOrdersProps } from '../../containers/ConfirmOrderContainer/ConfirmOrderContainer';
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
      console.log('loadOrdersAsync');

      dispatch(ordersLoading());

      const { status, data } = await api.get('/orders');

      if (status === 200) {
        dispatch(saveOrders(data));
      }
    } catch (e) {
      console.log(666, e);
    }
  };
};

export const editOrderAsync = (
  values: FormikOrdersProps,
  id: number,
  statusId: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    dispatch(ordersLoading());

    const { status, data } = await api.put('/orders', {
      ...values,
      id,
      status: statusId,
    });

    if (status === 200) {
      dispatch(loadOrdersAsync());
    }
  } catch (e) {
    console.log(666, e);
  }
};
