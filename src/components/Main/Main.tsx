import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
  },
});

const Main: FC = () => {
  const classes = useStyles();

  return <div className={classes.root}>freferf</div>;
};

export default Main;
