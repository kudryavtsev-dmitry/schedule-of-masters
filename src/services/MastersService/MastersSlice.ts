import { createSlice } from '@reduxjs/toolkit';
import { Location } from '../LocationService/LocationSlice';
import { Specialization } from '../SpecializaionService/SpecializationSlice';

export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  patronymic: string;
};

export type Master = {
  id: number;
  user: UserData;
  location: Location;
  specialization: Specialization;
};

export interface MastersState {
  loading: boolean;
  masters: Master[];
}

const initialState = {
  loading: false,
  masters: [],
} as MastersState;

const mastersSlice = createSlice({
  name: 'masters',
  initialState,
  reducers: {
    saveMastersData(state, action) {
      state.masters = action.payload;
      state.loading = false;
    },
    mastersLoading(state) {
      state.loading = true;
    },
  },
});
const { actions, reducer } = mastersSlice;

export const { saveMastersData, mastersLoading } = actions;

export default reducer;
