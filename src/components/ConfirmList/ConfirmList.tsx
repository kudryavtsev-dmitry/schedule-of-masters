import {
  Box,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Table,
  TableContainer,
  Theme,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
} from '@material-ui/core';
import moment from 'moment';
import React, { FC } from 'react';
import { ConfirmOrderContainer } from '../../containers';
import { Orders } from '../../services/OrdersService/OrdersSlice';
import { orderStatuses } from '../../utils/spravs/orderStatuses';
import { ConfirmListProps } from './ConfirmListProps';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 'calc(100vh - 48px)',
  },
  card: {
    paddingBottom: theme.spacing(3),
    margin: theme.spacing(3),
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 80px)',
    alignItems: 'center',
  },
}));

const ConfirmList: FC<ConfirmListProps> = ({
  orders,
  id,
  handleClickOpen,
  handleClose,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root} display="flex" justifyContent="center">
        <Card className={classes.card}>
          <CardHeader title="Обработка заказов" />
          <CardContent>
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
                  {orders.map((order: Orders) => {
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
          </CardContent>
        </Card>
      </Box>
      <Dialog
        open={Boolean(id)}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <ConfirmOrderContainer
          orders={orders}
          orderId={id}
          handleClose={handleClose}
        />
      </Dialog>
    </>
  );
};

export default ConfirmList;
