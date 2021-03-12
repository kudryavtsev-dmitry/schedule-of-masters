import { FormikProps } from 'formik';
import { CreateOrdersFormik } from '../../containers/CreateOrderContainer/CreateOrderContainer';
import { Location } from '../../services/LocationService/LocationSlice';

export type CreateOrderProps = {
  formik: FormikProps<CreateOrdersFormik>;
  locations: Location[];
  selectedCity?: number;
  handleSelectCity: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleClearCity: () => void;
  handleClose: () => void;
};
