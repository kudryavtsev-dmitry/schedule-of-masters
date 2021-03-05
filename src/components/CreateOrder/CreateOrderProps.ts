import { FormikProps } from 'formik';
import { UserOrdersFormik } from '../../containers/OrdersContainer/OrdersContainer';
import { Location } from '../../services/LocationService/LocationSlice';

export type CreateOrderProps = {
  formik: FormikProps<UserOrdersFormik>;
  locations: Location[];
  selectedCity?: number;
  handleSelectCity: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleClearCity: () => void;
  handleClose: () => void;
};
