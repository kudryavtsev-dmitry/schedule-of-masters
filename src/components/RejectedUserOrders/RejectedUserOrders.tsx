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
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';
import React, { FC } from 'react';
import { RejectedUserOrdersProps } from './RejectedUserOrdersProps';

const useStyles = makeStyles({
  btns: {
    display: 'flex',
    flexDirection: 'column',
    '& > button': {
      margin: 5,
    },
  },
});

const RejectedUserOrders: FC<RejectedUserOrdersProps> = ({
  orders,
  handleRemoveUserOrder,
  handleSelectOrder,
}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Дата создания</TableCell>
            <TableCell align="center" width="35%">
              Описание работы
            </TableCell>
            <TableCell align="center">Причина отказа</TableCell>
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
              <TableCell align="center">{order.comment}</TableCell>
              <TableCell align="center">{order.address}</TableCell>
              <TableCell align="center" className={classes.btns}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleSelectOrder(order)}
                >
                  Изменить
                </Button>
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

export default RejectedUserOrders;
