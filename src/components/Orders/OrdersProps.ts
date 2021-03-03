import { FormikProps } from 'formik';
import { UserOrdersFormik } from '../../containers/OrdersContainer/OrdersContainer';
import { Orders } from '../../services/UserOrdersService/UserOrdersSlice';

export interface OrdersProps {
  orders: Orders[];
  formik: FormikProps<UserOrdersFormik>;
}
