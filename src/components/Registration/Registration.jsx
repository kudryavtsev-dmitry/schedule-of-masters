import { Card, makeStyles, CardHeader } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 48px)',
  },
  card: {
    height: '60%',
    width: '30%',
  },
});

const Registration = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Регистрация" className={classes.title} />
      </Card>
    </div>
  );
};

export default Registration;
