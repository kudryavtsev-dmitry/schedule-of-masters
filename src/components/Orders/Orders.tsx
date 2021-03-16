import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  Theme,
  Typography,
  IconButton,
  Tabs,
  Tab,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import React, { FC, useState } from 'react';
import { OrdersProps } from './OrdersProps';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { CreateOrderContainer } from '../../containers';
import SwipeableViews from 'react-swipeable-views';
import { TabPanel, a11yProps } from '../TabPanel';
import { CreatedOrdersTable, RejectedUserOrders } from '..';
import EditOrderContainer from '../../containers/EditOrderContainer';

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
  handleClearSelectedOrder,
  handleSelectOrder,
  selectedOrder,
}) => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(0);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const rejectedOrders = orders.filter((order) => order.status === 3);

  console.log(666, orders);

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
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label={`Ожидают обработки (${
                orders.filter((order) => order.status === 1).length
              })`}
              {...a11yProps(0)}
            />
            <Tab
              label={`Отклонено (${rejectedOrders.length})`}
              {...a11yProps(1)}
            />
          </Tabs>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <TabPanel index={0} value={value}>
              <CardContent className={classes.content}>
                {orders.length ? (
                  <CreatedOrdersTable
                    orders={orders.filter((order) => order.status === 1)}
                    handleRemoveUserOrder={handleRemoveUserOrder}
                  />
                ) : (
                  <>
                    <Typography>Пока заказов нет.</Typography>
                  </>
                )}
              </CardContent>
            </TabPanel>
            <TabPanel index={1} value={value}>
              <CardContent className={classes.content}>
                {orders.length ? (
                  <RejectedUserOrders
                    orders={rejectedOrders}
                    handleRemoveUserOrder={handleRemoveUserOrder}
                    handleSelectOrder={handleSelectOrder}
                  />
                ) : (
                  <>
                    <Typography>Пока заказов нет.</Typography>
                  </>
                )}
              </CardContent>
            </TabPanel>
          </SwipeableViews>
        </Card>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <CreateOrderContainer handleClose={handleClose} />
      </Dialog>
      {selectedOrder && (
        <Dialog
          open={Boolean(selectedOrder)}
          onClose={handleClearSelectedOrder}
        >
          <EditOrderContainer
            handleClose={handleClearSelectedOrder}
            selectedOrder={selectedOrder}
          />
        </Dialog>
      )}
    </>
  );
};

export default Orders;
