import * as Yup from 'yup';

export const createOrderSchema = Yup.object().shape({
  description: Yup.string()
    .min(1, 'Слишком короткое описание')
    .max(512, 'Максимальная длинна описание 512 символов')
    .required('Обязательное поле'),
  cityLocation: Yup.number()
    .min(1, 'Выберете город')
    .required('Обязательное поле'),
  street: Yup.string().required('Обязательное поле'),
  homeNumber: Yup.string().required('Обязательное поле'),
  entrance: Yup.number().typeError('Должен быть числом'),
  floor: Yup.number().typeError('Должен быть числом'),
});
