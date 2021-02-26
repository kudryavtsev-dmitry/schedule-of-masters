import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { HeaderProps } from './HeaderProps';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header: FC<HeaderProps> = ({ handleLogOut }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.title}>
            Расписание мастеров
          </Typography>
          <NavLink to="/orders">Заказы</NavLink>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleLogOut}
          >
            <MeetingRoomIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
