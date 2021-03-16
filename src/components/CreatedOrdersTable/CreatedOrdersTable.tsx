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
import { CreatedOrdersTableProps } from './CreatedOrdersTableProps';

const CreatedOrdersTable: FC<CreatedOrdersTableProps> = ({
  orders,
  handleRemoveUserOrder,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Дата создания</TableCell>
            <TableCell align="center" width="35%">
              Описание работы
            </TableCell>
            <TableCell align="center">Мастер</TableCell>
            <TableCell align="center">Адрес</TableCell>
            <TableCell align="center">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell align="center">
                {moment(order.dateStart).format('DD.MM.yyyy')}
              </TableCell>
              <TableCell align="center">{order.description}</TableCell>
              <TableCell align="center">Не назначен</TableCell>
              <TableCell align="center">{order.address}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleRemoveUserOrder(order.id)}
                >
                  Отменить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CreatedOrdersTable;
