import { createSlice } from '@reduxjs/toolkit';

export type Location = {
  id: number;
  parentId?: number;
  title: string;
  lat: number;
  long: number;
  typeId: number;
};

export type LocationType = {
  id: number;
  title: string;
};

export interface LocationState {
  loading: boolean;
  locations: Location[];
  locationTypes: LocationType[];
}

const initialState = {
  loading: false,
  locations: [],
  locationTypes: [],
} as LocationState;

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    saveLocationsData(state, action) {
      state.locations = action.payload.locations;
      state.locationTypes = action.payload.locationTypes;
      state.loading = false;
    },
    servicesLoading(state) {
      state.loading = true;
    },
  },
});
const { actions, reducer } = locationSlice;

export const { saveLocationsData, servicesLoading } = actions;

export default reducer;
