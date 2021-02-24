import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isAuth: boolean;
  loading: boolean;
  login: string;
  firstName: string;
  lastName: string;
}

const initialState = {
  isAuth: Boolean(localStorage.getItem('user')),
  loading: false,
  login: '',
  firstName: '',
  lastName: '',
} as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signup(state, action) {
      state.isAuth = true;
      state.login = action.payload.login;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.loading = false;
    },
    userLoading(state) {
      state.loading = true;
    },
  },
});
const { actions, reducer } = userSlice;

export const { signup, userLoading } = actions;

export default reducer;
