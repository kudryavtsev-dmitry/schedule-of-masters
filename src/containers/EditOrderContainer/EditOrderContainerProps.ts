import { Orders } from '../../services/OrdersService/OrdersSlice';

export type EditOrderContainerProps = {
  handleClose: () => void;
  selectedOrder: Orders;
};
