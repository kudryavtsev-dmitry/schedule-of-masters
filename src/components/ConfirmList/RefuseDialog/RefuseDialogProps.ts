import { FormikProps } from 'formik';
import { FormikRefuseProps } from '../../../containers/ConfirmListContainer/ConfirmListContainer';

export interface RefuseDialogProps {
  handleCloseRefuseDialog: () => void;
  formikRefuse: FormikProps<FormikRefuseProps>;
}
