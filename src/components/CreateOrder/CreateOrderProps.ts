import { FormikProps } from 'formik';
import { CreateOrdersFormik } from '../../containers/CreateOrderContainer/CreateOrderContainer';
import { Location } from '../../services/LocationService/LocationSlice';

export type CreateOrderProps = {
  formik: FormikProps<CreateOrdersFormik>;
  handleClose: () => void;
};
