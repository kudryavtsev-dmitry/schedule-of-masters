import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { FormikAuth } from '../../containers/AuthContainer/AuthContainer';
import { FromikRegProps } from '../../containers/RegistrationContainer/RegistrationContainer';
import { api } from '../../utils';
import { signup, userLoading } from './UserSlice';

export const signupAsync = (
  values: FromikRegProps
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    dispatch(userLoading());

    const { status, data } = await api.post('/users', values);

    if (status === 200) {
      dispatch(signup(data.user));
    }
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('tokens', JSON.stringify(data.tokens));
  } catch (e) {
    console.log(666, e);
  }
};

export const signinAsync = (
  values: FormikAuth
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    dispatch(userLoading());

    const { status, data } = await api.post('/signin', values);

    console.log(status, data);

    // if (status === 200) {
    //   dispatch(signup(data.user));
    // }
    // localStorage.setItem('user', JSON.stringify(data.user));
    // localStorage.setItem('tokens', JSON.stringify(data.tokens));
  } catch (e) {
    console.log(666, e);
  }
};
