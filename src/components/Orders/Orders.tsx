import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Theme,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

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
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex" justifyContent="center">
      <Card className={classes.card}>
        <CardHeader title="Ваши заказы" />
        <CardContent className={classes.emptyContent}>
          <Typography>Пока заказов нет.</Typography>
          <Button>Создать заказ</Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Orders;
