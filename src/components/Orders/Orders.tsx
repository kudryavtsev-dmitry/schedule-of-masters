import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Theme,
  Typography,
  Paper,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import React, { FC, useState } from 'react';
import { OrdersProps } from './OrdersProps';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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

const Orders: FC<OrdersProps> = ({ orders, formik }) => {
  const [open, setOpen] = useState(false);

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
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
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Дата создания</TableCell>
                      <TableCell align="center">Описание работы</TableCell>
                      <TableCell align="center">Услуга</TableCell>
                      <TableCell align="center">Мастер</TableCell>
                      <TableCell align="center">Статус</TableCell>
                      <TableCell align="center">Действие</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell align="center">{order.dateStart}</TableCell>
                        <TableCell align="center">
                          {order.description}
                        </TableCell>
                        <TableCell align="center">{'В разработке'}</TableCell>
                        <TableCell align="center">{'В разработке'}</TableCell>
                        <TableCell align="center">{order.status}</TableCell>
                        <TableCell align="center">
                          <Button variant="contained" color="secondary">
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
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle id="form-dialog-title">Создать заказ</DialogTitle>
          <DialogContent>
            <Grid container alignItems="center" spacing={2} justify="center">
              <Grid item xs={8}>
                <TextField
                  name="description"
                  label="Описание"
                  fullWidth
                  type="password"
                  onChange={formik.handleChange}
                  multiline
                />
              </Grid>
              <Grid item xs={8}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    fullWidth
                    name="dateStart"
                    id="date-picker-dialog"
                    label="Выбрать дату"
                    format="dd/MM/yyyy"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    minDate={new Date()}
                    value={formik.values.dateStart}
                    onChange={(value) =>
                      formik.setFieldValue('dateStart', value)
                    }
                  />
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid item xs={8}>
                <Button variant="contained" component="label">
                  Upload File
                  <input type="file" hidden />
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Отмена
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Создать
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Orders;
