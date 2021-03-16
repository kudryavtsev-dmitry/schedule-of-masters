import { FormikProps } from 'formik';
import { FormikRefuseProps } from '../../containers/ConfirmListContainer/ConfirmListContainer';
import { Orders } from '../../services/OrdersService/OrdersSlice';

export interface ConfirmListProps {
  orders: Orders[];
  id?: number;
  handleClickOpen: (id: number) => void;
  handleClose: () => void;
  refuseDialog: boolean;
  handleOpenRefuseDialog: () => void;
  handleCloseRefuseDialog: () => void;
  formikRefuse: FormikProps<FormikRefuseProps>;
}
