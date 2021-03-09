import { Orders } from '../../services/OrdersService/OrdersSlice';

export interface OrdersProps {
  orders: Orders[];
  handleRemoveUserOrder: (id: number) => void;
  selectedCity?: number;
  handleSelectCity: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleClearCity: () => void;
}
