import * as Yup from 'yup';

export const refuseSchema = Yup.object().shape({
  comment: Yup.string()
    .min(3, 'Минимальная длинна логина 3 символа')
    .max(256, 'Максимум 256 символов')
    .required('Required'),
});
