import { Orders } from '../../services/OrdersService/OrdersSlice';

export interface RejectedUserOrdersProps {
  orders: Orders[];
  handleRemoveUserOrder: (id: number) => void;
  handleSelectOrder: (order: Orders) => void;
}
