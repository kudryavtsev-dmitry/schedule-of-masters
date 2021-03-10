import React, { FC } from 'react';
import { ConfirmOrder } from '../../components';
import { ConfirmDialogContainerProps } from './ConfirmDialogContainerProps';

const ConfirmOrderContainer: FC<ConfirmDialogContainerProps> = ({
  orders,
  orderId,
  handleClose,
}) => {
  const selecterOrder = orders.find((order) => order.id === orderId);

  console.log(selecterOrder);

  return (
    <ConfirmOrder selecterOrder={selecterOrder} handleClose={handleClose} />
  );
};

export default ConfirmOrderContainer;
