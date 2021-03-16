import * as Yup from 'yup';

export const editOrderSchema = Yup.object().shape({
  description: Yup.string()
    .min(1, 'Слишком короткое описание')
    .max(512, 'Максимальная длинна описание 512 символов')
    .required('Обязательное поле'),
});
