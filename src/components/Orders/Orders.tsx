import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import React, { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 'calc(100vh - 48px)',
  },
  card: {
    paddingBottom: theme.spacing(3),
    margin: theme.spacing(3),
    width: '100%',
  },
  emptyContent: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 80px)',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Orders = () => {
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
          <CardHeader title="Ваши заказы" />
          <CardContent className={classes.emptyContent}>
            <Typography>Пока заказов нет.</Typography>
            <Button onClick={handleClickOpen}>Создать заказ</Button>
          </CardContent>
        </Card>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Создать заказ</DialogTitle>
        <DialogContent>
          <form>
            <Grid container alignItems="center" spacing={2} justify="center">
              <Grid item xs={8}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Роль</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={1}>Клиент</MenuItem>
                    <MenuItem value={2}>Мастер</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={8}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    fullWidth
                    id="date-picker-dialog"
                    label="Выбрать дату"
                    format="dd/MM/yyyy"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Роль</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={1}>Клиент</MenuItem>
                    <MenuItem value={2}>Мастер</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={8}>
                <TextField label="Логин" name="login" fullWidth />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="password"
                  label="Пароль"
                  fullWidth
                  type="password"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="password"
                  label="Комментарий"
                  fullWidth
                  type="password"
                  multiline
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Orders;
