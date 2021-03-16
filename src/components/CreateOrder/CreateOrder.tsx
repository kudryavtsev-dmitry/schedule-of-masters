import DateFnsUtils from '@date-io/date-fns';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import React, { FC, useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import { CreateOrderProps } from './CreateOrderProps';
import 'react-dadata/dist/react-dadata.css';

const useStyles = makeStyles({
  root: {
    height: 400,
  },
});

const CreateOrder: FC<CreateOrderProps> = ({ formik, handleClose }) => {
  const classes = useStyles();

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogTitle id="form-dialog-title">Создать заказ</DialogTitle>
      <DialogContent className={classes.root}>
        <Grid container alignItems="center" spacing={2} justify="center">
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Описание"
              fullWidth
              type="password"
              onChange={formik.handleChange}
              multiline
              value={formik.values.description}
              error={Boolean(
                formik.touched.description && formik.errors.description
              )}
              helperText={
                formik.touched.description && formik.errors.description
              }
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
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
                onChange={(value) => formik.setFieldValue('dateStart', value)}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12}>
            <>
              <Typography>Введите адрес</Typography>
              <AddressSuggestions
                token="cce013f68eec2e417ea7e9d629aa901dc39ce957"
                value={formik.values.address}
                onChange={(value) => formik.setFieldValue('address', value)}
              />
            </>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Отмена
        </Button>
        <Button color="primary" type="submit">
          Создать
        </Button>
      </DialogActions>
    </form>
  );
};

export default CreateOrder;
