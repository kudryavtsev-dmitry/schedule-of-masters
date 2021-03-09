import { createSlice } from '@reduxjs/toolkit';
import { Orders } from '../OrdersService/OrdersSlice';

export interface OrdersState {
  loading: boolean;
  orders: Orders[];
}

const initialState = {
  loading: false,
  orders: [],
} as OrdersState;

const userOrdersSlice = createSlice({
  name: 'userOrders',
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
const { actions, reducer } = userOrdersSlice;

export const { saveUserOrders, userOrdersLoading } = actions;

export default reducer;
