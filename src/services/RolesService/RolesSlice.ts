import { createSlice } from '@reduxjs/toolkit';

export type Roles = {
  id: number;
  title: string;
  rules: boolean;
};

export interface RolesState {
  loading: boolean;
  roles: Roles[];
}

const initialState = {
  loading: false,
  roles: [],
} as RolesState;

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    saveRolesData(state, action) {
      state.roles = action.payload;
      state.loading = false;
    },
    rolesLoading(state) {
      state.loading = true;
    },
  },
});
const { actions, reducer } = rolesSlice;

export const { saveRolesData, rolesLoading } = actions;

export default reducer;
