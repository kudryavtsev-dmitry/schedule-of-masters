import { Orders } from '../../services/OrdersService/OrdersSlice';

export interface OrdersProps {
  orders: Orders[];
  handleRemoveUserOrder: (id: number) => void;
  handleSelectOrder: (order: Orders) => void;
  handleClearSelectedOrder: () => void;
  selectedOrder?: Orders;
}
