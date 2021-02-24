import {
  Card,
  makeStyles,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RegistrationProps } from './RegistrationProps';

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
});

const Registration: FC<RegistrationProps> = ({ formik }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Регистрация" className={classes.title} />
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container alignItems="center" spacing={3} justify="center">
              <Grid item xs={8}>
                <TextField
                  label="Имя"
                  fullWidth
                  name="firstName"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Фамилия"
                  fullWidth
                  name="lastName"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Отчество"
                  fullWidth
                  name="patronymic"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Роль"
                  name="role"
                  fullWidth
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Логин"
                  name="login"
                  fullWidth
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Пароль"
                  name="password"
                  fullWidth
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Зарегистрироваться
                </Button>
              </Grid>
              <Grid item xs={8} className={classes.link}>
                <NavLink to="/">У меня есть аккаунт</NavLink>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;
