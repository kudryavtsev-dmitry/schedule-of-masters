import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  TextField,
} from '@material-ui/core';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthProps } from './AuthProps';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 48px)',
  },
  card: {
    width: '30%',
  },
  title: {
    textAlign: 'center',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
  },
  nav: {
    color: 'black',
    textDecoration: 'none',
  },
  active: {
    color: 'black',
    '&:visited': {
      color: 'black',
    },
  },
});

const Auth: FC<AuthProps> = ({ formik }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Авторизация" className={classes.title} />
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container alignItems="center" spacing={3} justify="center">
              <Grid item xs={8}>
                <TextField
                  label="Логин"
                  name="login"
                  fullWidth
                  onChange={formik.handleChange}
                  error={Boolean(formik.touched.login && formik.errors.login)}
                  helperText={formik.touched.login && formik.errors.login}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="password"
                  label="Пароль"
                  fullWidth
                  type="password"
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.touched.password && formik.errors.password
                  )}
                  helperText={formik.touched.password && formik.errors.password}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={8}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Войти
                </Button>
              </Grid>
              <Grid item xs={8} className={classes.link}>
                <NavLink
                  to="/registration"
                  className={classes.nav}
                  activeClassName={classes.active}
                >
                  Не зарегистрированы?
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
