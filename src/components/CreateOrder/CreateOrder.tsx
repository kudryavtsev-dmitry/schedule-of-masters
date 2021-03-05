import DateFnsUtils from '@date-io/date-fns';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import React, { FC } from 'react';
import { CreateOrderProps } from './CreateOrderProps';

const CreateOrder: FC<CreateOrderProps> = ({
  formik,
  handleSelectCity,
  locations,
  handleClose,
  selectedCity,
}) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogTitle id="form-dialog-title">Создать заказ</DialogTitle>
      <DialogContent>
        <Grid container alignItems="center" spacing={2} justify="center">
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Описание"
              fullWidth
              type="password"
              onChange={formik.handleChange}
              multiline
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
            <FormControl
              fullWidth
              error={Boolean(
                formik.touched.cityLocation && formik.errors.cityLocation
              )}
            >
              <InputLabel id="city">Выбрать город</InputLabel>
              <Select
                name="cityLocation"
                labelId="city"
                id="city-select"
                onChange={(e) => {
                  formik.setFieldValue('cityLocation', e.target.value);
                  handleSelectCity(e);
                }}
                value={formik.values.cityLocation}
              >
                <MenuItem value={0} key={0}>
                  {'Выбрать город'}
                </MenuItem>
                {locations.map((location) => {
                  return (
                    <MenuItem value={location.id} key={location.id}>
                      {location.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Доступные районы
              </InputLabel>
              <Select
                name="district"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formik.values.district}
                onChange={formik.handleChange}
                disabled={
                  !Boolean(
                    locations.find((loc) => loc.id === selectedCity)?.children
                      .length
                  )
                }
              >
                <MenuItem value={0} key={0}>
                  {'Выбрать район'}
                </MenuItem>
                {locations
                  .find((loc) => loc.id === selectedCity)
                  ?.children.map((location) => (
                    <MenuItem value={location.id} key={location.id}>
                      {location.title}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Улица"
              name="street"
              fullWidth
              onChange={formik.handleChange}
              error={Boolean(formik.touched.street && formik.errors.street)}
              helperText={formik.touched.street && formik.errors.street}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Номер дома"
              name="homeNumber"
              fullWidth
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.homeNumber && formik.errors.homeNumber
              )}
              helperText={formik.touched.homeNumber && formik.errors.homeNumber}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Подъезд"
              name="entrance"
              fullWidth
              onChange={formik.handleChange}
              error={Boolean(formik.touched.entrance && formik.errors.entrance)}
              helperText={formik.touched.entrance && formik.errors.entrance}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Этаж"
              name="floor"
              fullWidth
              onChange={formik.handleChange}
              error={Boolean(formik.touched.floor && formik.errors.floor)}
              helperText={formik.touched.floor && formik.errors.floor}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Квартира"
              name="apartNumber"
              fullWidth
              onChange={formik.handleChange}
            />
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
