import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { api } from '../../utils';
import {
  saveSpecializationsData,
  specializationsLoading,
} from './SpecializationSlice';

export const loadSpecializationsAsync = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch(specializationsLoading());

    const { status, data } = await api.get('/specializations');

    if (status === 200) {
      dispatch(saveSpecializationsData(data));
    }
  } catch (e) {
    console.log(666, e);
  }
};
