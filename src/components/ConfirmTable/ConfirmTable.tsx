import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import moment from 'moment';
import React, { FC } from 'react';
import { orderStatuses } from '../../utils/spravs/orderStatuses';
import { ConfirmTableProps } from './ConfirmTableProps';

const ConfirmTable: FC<ConfirmTableProps> = ({ orders, handleClickOpen }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Дата создания</TableCell>
            <TableCell align="center">Клиент</TableCell>
            <TableCell align="center">Адрес</TableCell>
            <TableCell align="center">Статус</TableCell>
            <TableCell align="center">Обработать заказ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders
            .filter((order) => order.status === 1)
            .map((order) => {
              return (
                <TableRow key={order.id}>
                  <TableCell align="center">
                    {moment(order.dateStart).format('DD.MM.yyyy')}
                  </TableCell>
                  <TableCell align="center">
                    {order.user.firstName} {order.user.lastName}{' '}
                    {order.user.patronymic}
                  </TableCell>
                  <TableCell align="center">{order.address}</TableCell>
                  <TableCell align="center">
                    {orderStatuses.get(order.status)}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleClickOpen(order.id)}
                    >
                      Выбор
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConfirmTable;
