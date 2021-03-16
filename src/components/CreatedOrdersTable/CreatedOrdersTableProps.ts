import { Orders } from '../../services/OrdersService/OrdersSlice';

export interface CreatedOrdersTableProps {
  orders: Orders[];
  handleRemoveUserOrder: (id: number) => void;
}
