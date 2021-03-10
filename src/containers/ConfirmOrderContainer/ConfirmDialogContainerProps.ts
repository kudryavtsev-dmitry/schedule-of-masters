import { Orders } from '../../services/OrdersService/OrdersSlice';

export interface ConfirmDialogContainerProps {
  orders: Orders[];
  orderId?: number;
  handleClose: () => void;
}
