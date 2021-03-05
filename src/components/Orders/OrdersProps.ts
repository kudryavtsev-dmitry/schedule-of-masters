import { FormikProps } from 'formik';
import { UserOrdersFormik } from '../../containers/OrdersContainer/OrdersContainer';
import { Location } from '../../services/LocationService/LocationSlice';
import { Orders } from '../../services/UserOrdersService/UserOrdersSlice';

export interface OrdersProps {
  orders: Orders[];
  handleRemoveUserOrder: (id: number) => void;
  selectedCity?: number;
  handleSelectCity: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleClearCity: () => void;
}
