import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '../MastersService/MastersSlice';

export type Address = {
  id: number;
  locationId: number;
  street: string;
  homeNumber: string;
  entrance: string;
  floor: string;
  apartNumber: string;
};

export type Orders = {
  id: number;
  description: string;
  dateStart: Date;
  dateEnd: Date | null;
  status: number;
  comment: string | null;
  photos: null;
  user: UserData;
  address: Address;
};

export interface OrdersState {
  loading: boolean;
  orders: Orders[];
}

const initialState = {
  loading: false,
  orders: [],
} as OrdersState;

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    saveUserOrders(state, action) {
      state.orders = action.payload;
      state.loading = false;
    },
    userOrdersLoading(state) {
      state.loading = true;
    },
  },
});
const { actions, reducer } = ordersSlice;

export const { saveUserOrders, userOrdersLoading } = actions;

export default reducer;
