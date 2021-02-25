import {
  Card,
  makeStyles,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
  nav: {
    textDecoration: 'none',
    color: 'black',
    '&:visited': {
      color: 'black',
    },
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
                  error={Boolean(
                    formik.touched.firstName && formik.errors.firstName
                  )}
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Фамилия"
                  fullWidth
                  name="lastName"
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.touched.lastName && formik.errors.lastName
                  )}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Отчество"
                  fullWidth
                  name="patronymic"
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.touched.patronymic && formik.errors.patronymic
                  )}
                  helperText={
                    formik.touched.patronymic && formik.errors.patronymic
                  }
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Роль</InputLabel>
                  <Select
                    value={formik.values.role}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={1}>Клиент</MenuItem>
                    <MenuItem value={2}>Мастер</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
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
                  label="Пароль"
                  name="password"
                  fullWidth
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
                  Зарегистрироваться
                </Button>
              </Grid>
              <Grid item xs={8} className={classes.link}>
                <NavLink className={classes.nav} to="/">
                  У меня есть аккаунт
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;
