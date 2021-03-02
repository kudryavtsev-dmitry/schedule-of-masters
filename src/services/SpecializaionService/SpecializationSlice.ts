import { createSlice } from '@reduxjs/toolkit';

export type Specialization = {
  id: number;
  title: string;
  icon: string;
};

export interface SpecializationState {
  loading: boolean;
  specializations: Specialization[];
}

const initialState = {
  loading: false,
  specializations: [],
} as SpecializationState;

const specializationsSlice = createSlice({
  name: 'specializations',
  initialState,
  reducers: {
    saveSpecializationsData(state, action) {
      state.specializations = action.payload;
      state.loading = false;
    },
    specializationsLoading(state) {
      state.loading = true;
    },
  },
});
const { actions, reducer } = specializationsSlice;

export const { saveSpecializationsData, specializationsLoading } = actions;

export default reducer;
