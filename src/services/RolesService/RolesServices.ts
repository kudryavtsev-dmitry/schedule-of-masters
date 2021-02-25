import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { api } from '../../utils';
import { rolesLoading, saveRolesData } from './RolesSlice';

export const loadRolesAsync = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch(rolesLoading());

    const { status, data } = await api.get('/roles');

    if (status === 200) {
      dispatch(saveRolesData(data));
    }
  } catch (e) {
    console.log(666, e);
  }
};
