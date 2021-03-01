import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { api } from '../../utils';
import { saveServicesData, servicesLoading } from './ServicesCatalogSlice';

export const loadServicesAsync = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch(servicesLoading());

    const { status, data } = await api.get('/services');

    if (status === 200) {
      dispatch(saveServicesData(data));
    }
  } catch (e) {
    console.log(666, e);
  }
};
