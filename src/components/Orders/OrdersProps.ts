import { FormikProps } from 'formik';
import { UserOrdersFormik } from '../../containers/OrdersContainer/OrdersContainer';
import { Location } from '../../services/LocationService/LocationSlice';
import { Orders } from '../../services/UserOrdersService/UserOrdersSlice';

export interface OrdersProps {
  orders: Orders[];
  formik: FormikProps<UserOrdersFormik>;
  handleRemoveUserOrder: (id: number) => void;
  locations: Location[];
  selectedCity?: number;
  handleSelectCity: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleClearCity: () => void;
}
