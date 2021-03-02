import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { api } from '../../utils';
import { mastersLoading, saveMastersData } from './MastersSlice';

export const loadMastersAsync = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch(mastersLoading());

    const { status, data } = await api.get('/masters');

    console.log(data);

    if (status === 200) {
      dispatch(saveMastersData(data));
    }
  } catch (e) {
    console.log(666, e);
  }
};
