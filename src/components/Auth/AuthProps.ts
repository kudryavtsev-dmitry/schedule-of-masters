import { FormikProps } from 'formik';
import { FormikAuth } from '../../containers/AuthContainer/AuthContainer';

export interface AuthProps {
  formik: FormikProps<FormikAuth>;
}
