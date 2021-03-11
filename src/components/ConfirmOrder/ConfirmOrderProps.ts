import { FormikProps } from 'formik';
import { FormikOrdersProps } from '../../containers/ConfirmOrderContainer/ConfirmOrderContainer';
import { Master } from '../../services/MastersService/MastersSlice';
import { Orders } from '../../services/OrdersService/OrdersSlice';
import { Service } from '../../services/ServicesCatalogService/ServicesCatalogSlice';
import { Specialization } from '../../services/SpecializaionService/SpecializationSlice';

export interface ConfirmOrderProps {
  selectedOrder?: Orders;
  handleClose: () => void;
  masters: Master[];
  services: Service[];
  specializations: Specialization[];
  formik: FormikProps<FormikOrdersProps>;
  handleChangeSpecializationId: (id: number) => void;
  specializationId: number;
}
