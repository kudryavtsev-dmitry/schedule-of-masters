import { createSlice } from '@reduxjs/toolkit';

export type Service = {
  id: number;
  title: string;
  price: number;
  dutationMinutes: number;
  specializationId: number;
};

export interface ServicesState {
  loading: boolean;
  services: Service[];
}

const initialState = {
  loading: false,
  services: [],
} as ServicesState;

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    saveServicesData(state, action) {
      state.services = action.payload;
      state.loading = false;
    },
    servicesLoading(state) {
      state.loading = true;
    },
  },
});
const { actions, reducer } = servicesSlice;

export const { saveServicesData, servicesLoading } = actions;

export default reducer;
