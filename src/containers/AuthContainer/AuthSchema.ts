import * as Yup from 'yup';

export const AuthSchema = Yup.object().shape({
  login: Yup.string()
    .min(3, 'Минимальная длинна логина 3 символа')
    .max(20, 'Максимум 20 символов')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Минимальная длинна пароля 3 символа')
    .max(20, 'Максимум 20 символов')
    .required('Required'),
});
