import { Orders } from '../../services/OrdersService/OrdersSlice';

export interface ConfirmTableProps {
  orders: Orders[];
  handleClickOpen: (id: number) => void;
}
