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

const ConfirmOrder: FC<ConfirmOrderProps> = ({
  selecterOrder,
  handleClose,
}) => {
  if (selecterOrder) {
    return (
      <form>
        <DialogTitle />
        <DialogContent>
          <Grid container spacing={2} justify="center">
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
                        {selecterOrder.user.firstName}{' '}
                        {selecterOrder.user.lastName}{' '}
                        {selecterOrder.user.patronymic}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                        {moment(selecterOrder.dateStart).format('DD.MM.yyyy')}
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>
                        {orderStatuses.get(selecterOrder.status)}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Typography>{selecterOrder.description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={2} justify="center">
                    <Grid item xs={4}>
                      <Typography align="center">
                        Город: В разработке
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography align="center">
                        Район: В разработке
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography align="center">
                        Улица: {selecterOrder.address.street}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography align="center">
                        № Дома: {selecterOrder.address.homeNumber}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography align="center">
                        Подъезд: {selecterOrder.address.entrance}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography align="center">
                        Этаж: {selecterOrder.address.floor}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography align="center">
                        Квартира: {selecterOrder.address.apartNumber}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={2} justify="center">
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="city">
                          Мастера, доступные по данной локации
                        </InputLabel>
                        <Select
                          name="cityLocation"
                          labelId="city"
                          id="city-select"
                        >
                          <MenuItem value={0} key={0}>
                            Выбрать мастера
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
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
          <Button color="primary" variant="contained">
            Принять
          </Button>
        </DialogActions>
      </form>
    );
  }
  return null;
};

export default ConfirmOrder;
