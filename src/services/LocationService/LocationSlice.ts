import { createSlice } from '@reduxjs/toolkit';

export type LocationType = {
  id: number;
  title: string;
};

export type Location = {
  id: number;
  parentId?: number;
  title: string;
  coordinates: string;
  children: Location[];
  typeId: number;
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
    locationsLoading(state) {
      state.loading = true;
    },
  },
});
const { actions, reducer } = locationSlice;

export const { saveLocationsData, locationsLoading } = actions;

export default reducer;
