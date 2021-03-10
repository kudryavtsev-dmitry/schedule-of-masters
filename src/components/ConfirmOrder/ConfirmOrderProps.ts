import { Orders } from '../../services/OrdersService/OrdersSlice';

export interface ConfirmOrderProps {
  selecterOrder?: Orders;
  handleClose: () => void;
}
