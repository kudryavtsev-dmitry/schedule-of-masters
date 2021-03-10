import { Orders } from '../../services/OrdersService/OrdersSlice';

export interface ConfirmListProps {
  orders: Orders[];
  id?: number;
  handleClickOpen: (id: number) => void;
  handleClose: () => void;
}
