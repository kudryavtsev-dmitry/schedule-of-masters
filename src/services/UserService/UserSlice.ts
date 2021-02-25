import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isAuth: boolean;
  loading: boolean;
  login: string;
  role: number | null;
  firstName: string;
  lastName: string;
}

const initialState = {
  isAuth: Boolean(localStorage.getItem('user')),
  loading: false,
  login: '',
  role: null,
  firstName: '',
  lastName: '',
} as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData(state, action) {
      state.isAuth = true;
      state.login = action.payload.login;
      state.firstName = action.payload.firstName;
      state.role = action.payload.role;
      state.lastName = action.payload.lastName;
      state.loading = false;
    },
    userLoading(state) {
      state.loading = true;
    },
    logOut(state) {
      state.isAuth = false;
      state.login = '';
      state.role = null;
      state.firstName = '';
      state.lastName = '';
      state.loading = false;
    },
  },
});
const { actions, reducer } = userSlice;

export const { saveUserData, userLoading, logOut } = actions;

export default reducer;
