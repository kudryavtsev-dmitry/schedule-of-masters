import {
  Button,
  Card,
  CardContent,
  CardHeader,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import React, { FC } from 'react';
import { orderStatuses } from '../../utils/spravs/orderStatuses';
import { ConfirmOrderProps } from './ConfirmOrderProps';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const ConfirmOrder: FC<ConfirmOrderProps> = ({
  selectedOrder,
  handleClose,
  masters,
  services,
  specializations,
  formik,
  handleChangeSpecializationId,
  specializationId,
}) => {
  if (selectedOrder && masters.length) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <DialogTitle />
        <DialogContent>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12}>
              <Card>
                <YMaps>
                  <Map
                    defaultState={{
                      center: [
                        +selectedOrder.addressLat,
                        +selectedOrder.addressLon,
                      ],
                      zoom: 13,
                    }}
                    width="100%"
                    height="150px"
                  >
                    <Placemark
                      geometry={[
                        +selectedOrder.addressLat,
                        +selectedOrder.addressLon,
                      ]}
                    />
                  </Map>
                </YMaps>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    spacing={1}
                    alignItems="center"
                  >
                    <Grid item xs={12}>
                      <Typography>
                        {selectedOrder.user.firstName}{' '}
                        {selectedOrder.user.lastName}{' '}
                        {selectedOrder.user.patronymic}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                        {moment(selectedOrder.dateStart).format('DD.MM.yyyy')}
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>{selectedOrder.address}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Typography>{selectedOrder.description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={2} justify="center">
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="specialization">
                          Выбрать специализацию
                        </InputLabel>
                        <Select
                          name="specialization"
                          labelId="specialization"
                          id="specialization-select"
                          defaultValue={0}
                          onChange={(e) => {
                            console.log(e.target.value);

                            handleChangeSpecializationId(
                              e.target.value as number
                            );
                          }}
                        >
                          <MenuItem value={0} key={0}>
                            Выбрать специализацию
                          </MenuItem>
                          {specializations.map((specialization) => (
                            <MenuItem
                              value={specialization.id}
                              key={specialization.id}
                            >
                              {specialization.title}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    {!!specializationId && (
                      <>
                        <Grid item xs={12}>
                          <FormControl fullWidth>
                            <InputLabel id="masters">
                              Мастера, доступные по данной локации
                            </InputLabel>
                            <Select
                              name="master"
                              labelId="masters"
                              id="master-select"
                              defaultValue={0}
                              value={formik.values.master}
                              onChange={formik.handleChange}
                            >
                              <MenuItem value={0} key={0}>
                                Выбрать мастера
                              </MenuItem>
                              {masters.map((master) => (
                                <MenuItem value={master.id} key={master.id}>
                                  {master.user.firstName} {master.user.lastName}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth>
                            <InputLabel id="service">Выбрать услугу</InputLabel>
                            <Select
                              name="service"
                              labelId="service"
                              id="service-select"
                              defaultValue={0}
                              value={formik.values.service}
                              onChange={formik.handleChange}
                            >
                              <MenuItem value={0} key={0}>
                                Выбрать услугу
                              </MenuItem>
                              {services.map((service) => (
                                <MenuItem value={service.id} key={service.id}>
                                  {service.title}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" variant="contained" onClick={handleClose}>
            Отмена
          </Button>
          <Button color="secondary" variant="contained">
            Отказать
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Принять
          </Button>
        </DialogActions>
      </form>
    );
  }
  return null;
};

export default ConfirmOrder;
