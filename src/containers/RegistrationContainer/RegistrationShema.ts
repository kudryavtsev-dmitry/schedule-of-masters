import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, 'Имя должно содержать более 1 символа')
    .max(60, 'Слишком длинное имя')
    .required('Required'),
  lastName: Yup.string()
    .min(1, 'Фамилия должна содержать более 1 символа')
    .max(60, 'Слишком длинная фамилия')
    .required('Required'),
  patronymic: Yup.string()
    .min(1, 'Отчество должно содержать более 1 символа')
    .max(60, 'Слишком длинное отчество'),
  login: Yup.string()
    .min(3, 'Минимальная длинна логина 3 символа')
    .max(20, 'Максимум 20 символов')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Минимальная длинна пароля 3 символа')
    .max(20, 'Максимум 20 символов')
    .required('Required'),
});
