import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
  Paper,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import React, { FC, useState } from 'react';
import { OrdersProps } from './OrdersProps';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import moment from 'moment';
import { orderStatuses } from '../../utils/spravs/orderStatuses';
import { CreateOrderContainer } from '../../containers';

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
  cardTitle: {
    flex: '0 0 auto',
  },
  action: {
    margin: 0,
  },
  cardHeader: {
    alignItems: 'center',
  },
}));

const Orders: FC<OrdersProps> = ({
  orders,
  handleRemoveUserOrder,
  selectedCity,
  handleSelectCity,
  handleClearCity,
}) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleClearCity();
    setOpen(false);
  };

  return (
    <>
      <Box className={classes.root} display="flex" justifyContent="center">
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            classes={{ content: classes.cardTitle, action: classes.action }}
            title="Ваши заказы"
            action={
              <IconButton
                aria-label="settings"
                color="primary"
                onClick={handleClickOpen}
              >
                <AddCircleIcon />
              </IconButton>
            }
          />
          <CardContent className={classes.content}>
            {orders.length ? (
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
                      <TableCell align="center">Статус</TableCell>
                      <TableCell align="center">Действие</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell align="center">
                          {moment(order.dateStart).format('DD.MM.yyyy')}
                        </TableCell>
                        <TableCell align="center">
                          {order.description}
                        </TableCell>
                        <TableCell align="center">Не назначен</TableCell>
                        <TableCell align="center">{order.address}</TableCell>

                        <TableCell align="center">
                          {orderStatuses.get(order.status)}
                        </TableCell>
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
            ) : (
              <>
                <Typography>Пока заказов нет.</Typography>
              </>
            )}
          </CardContent>
        </Card>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <CreateOrderContainer
          handleClose={handleClose}
          handleClearCity={handleClearCity}
          handleSelectCity={handleSelectCity}
          selectedCity={selectedCity}
        />
      </Dialog>
    </>
  );
};

export default Orders;
