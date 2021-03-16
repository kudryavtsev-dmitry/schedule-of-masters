import { Box, CircularProgress } from '@material-ui/core';
import { FormikProps, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ConfirmList } from '../../components';
import { RootState } from '../../services';
import {
  loadOrdersAsync,
  refuseOrderAsync,
} from '../../services/OrdersService/OrdersService';
import { refuseSchema } from './refuseSchema';

export type FormikRefuseProps = {
  comment: string;
};

const ConfirmListContainer = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState<number>();

  const [refuseDialog, setRefuseDialog] = useState(false);

  const handleOpenRefuseDialog = () => {
    setRefuseDialog(true);
  };
  const handleCloseRefuseDialog = () => {
    setRefuseDialog(false);
  };

  const handleClickOpen = (id: number) => {
    setId(id);
  };

  const handleClose = () => {
    setId(undefined);
  };

  const orders = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    dispatch(loadOrdersAsync());
  }, []);

  const formikRefuse: FormikProps<FormikRefuseProps> = useFormik({
    initialValues: {
      comment: '',
    },
    validationSchema: refuseSchema,
    onSubmit: (values) => {
      if (id) {
        dispatch(refuseOrderAsync(values, id));
        handleCloseRefuseDialog();
        handleClose();
      }
    },
  });

  if (orders.loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 48px)"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ConfirmList
      formikRefuse={formikRefuse}
      orders={orders.orders}
      id={id}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      refuseDialog={refuseDialog}
      handleOpenRefuseDialog={handleOpenRefuseDialog}
      handleCloseRefuseDialog={handleCloseRefuseDialog}
    />
  );
};

export default ConfirmListContainer;
