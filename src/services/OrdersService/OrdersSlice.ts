import { createSlice } from '@reduxjs/toolkit';
import { Master, UserData } from '../MastersService/MastersSlice';

export type Orders = {
  id: number;
  description: string;
  dateStart: Date;
  dateEnd: Date | null;
  master: Master | null;
  status: number;
  comment: string | null;
  photos: null;
  user: UserData;
  address: string;
  addressLat: string;
  addressLon: string;
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
    saveOrders(state, action) {
      state.orders = action.payload;
      state.loading = false;
    },
    ordersLoading(state) {
      state.loading = true;
    },
  },
});
const { actions, reducer } = ordersSlice;

export const { saveOrders, ordersLoading } = actions;

export default reducer;
