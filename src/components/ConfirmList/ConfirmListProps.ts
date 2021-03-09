import { Orders } from '../../services/OrdersService/OrdersSlice';

export interface ConfirmListProps {
  orders: Orders[];
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
}
