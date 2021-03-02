import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { api } from '../../utils';
import { locationsLoading, saveLocationsData } from './LocationSlice';

export const loadLocationsAsync = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch(locationsLoading());

    const { status: locationStatus, data: locations } = await api.get(
      '/locations'
    );

    const { status: locationTypeStatus, data: locationTypes } = await api.get(
      '/location-types'
    );

    if (locationStatus === 200 && locationTypeStatus === 200) {
      dispatch(saveLocationsData({ locations, locationTypes }));
    }
  } catch (e) {
    console.log(666, e);
  }
};
