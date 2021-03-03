import { Store } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isAuth: boolean;
  loading: boolean;
  id: number | null;
  login: string;
  role: number | null;
  firstName: string;
  lastName: string;
}

const initialState = {
  isAuth: Boolean(localStorage.getItem('user')),
  loading: false,
  id:
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user')!).id,
  login:
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user')!).login,
  role:
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user')!).role,
  firstName:
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user')!).firstName,
  lastName:
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user')!).lastName,
} as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData(state, action) {
      state.isAuth = true;
      state.login = action.payload.login;
      state.id = action.payload.id;
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
      state.id = null;
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
