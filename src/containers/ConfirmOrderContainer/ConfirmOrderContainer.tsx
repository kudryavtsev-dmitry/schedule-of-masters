import { FormikProps, useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmOrder } from '../../components';
import { RootState } from '../../services';
import { editOrderAsync } from '../../services/OrdersService/OrdersService';
import { ConfirmDialogContainerProps } from './ConfirmDialogContainerProps';

export type FormikOrdersProps = {
  master: number;
  service: number;
};

const ConfirmOrderContainer: FC<ConfirmDialogContainerProps> = ({
  orders,
  orderId,
  handleClose,
  handleOpenRefuseDialog,
}) => {
  const [specializationId, setSpecializationId] = useState(0);

  const selectedOrder = orders.find((order) => order.id === orderId);

  const masters = useSelector((state: RootState) => state.masters);

  const services = useSelector((state: RootState) => state.services);

  const specializations = useSelector(
    (state: RootState) => state.specializations
  );

  const dispatch = useDispatch();

  const handleChangeSpecializationId = (id: number) => {
    setSpecializationId(id);
  };

  const handleCloseModal = () => {
    setSpecializationId(0);
    handleClose();
  };

  const formik: FormikProps<FormikOrdersProps> = useFormik({
    initialValues: {
      master: 0,
      service: 0,
    },
    onSubmit: (values) => {
      if (selectedOrder) {
        handleClose();
        dispatch(editOrderAsync(values, selectedOrder.id, 2));
      }
    },
  });

  return (
    <ConfirmOrder
      handleOpenRefuseDialog={handleOpenRefuseDialog}
      formik={formik}
      services={services.services}
      selectedOrder={selectedOrder}
      handleClose={handleCloseModal}
      masters={masters.masters}
      specializations={specializations.specializations}
      handleChangeSpecializationId={handleChangeSpecializationId}
      specializationId={specializationId}
    />
  );
};

export default ConfirmOrderContainer;
