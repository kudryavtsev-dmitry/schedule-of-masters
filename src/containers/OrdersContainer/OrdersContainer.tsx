import { FormikProps, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Orders } from '../../components';
import { RootState } from '../../services';
import {
  addOrder,
  loadUserOrdersAsync,
  removeUserOrder,
} from '../../services/UserOrdersService/UserOrdersService';

export type UserOrdersFormik = {
  description: string;
  dateStart: Date;
  cityLocation: number;
  district: number;
  street: string;
  homeNumber: string;
  entrance: string;
  floor: string;
  apartNumber: string;
};

const OrdersContainer = () => {
  const [selectedCity, setSelectedCity] = useState<number>();

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const userOrders = useSelector((state: RootState) => state.userOrders);

  const locations = useSelector(
    (state: RootState) => state.locations.locations
  );

  const handleRemoveUserOrder = (id: number) => {
    user.id && dispatch(removeUserOrder(id, user.id));
  };

  const handleSelectCity = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCity(event.target.value as number);
  };

  const handleClearCity = () => {
    setSelectedCity(undefined);
  };

  const formik: FormikProps<UserOrdersFormik> = useFormik({
    initialValues: {
      description: '',
      dateStart: new Date(),
      cityLocation: 0,
      district: 0,
      street: '',
      homeNumber: '',
      entrance: '',
      floor: '',
      apartNumber: '',
    },
    onSubmit: (values) => {
      if (user.id) {
        dispatch(addOrder(values, user.id));
      }
    },
  });

  useEffect(() => {
    if (user.id) {
      dispatch(loadUserOrdersAsync(user.id));
    }
  }, []);

  return (
    <Orders
      orders={userOrders.orders}
      formik={formik}
      handleRemoveUserOrder={handleRemoveUserOrder}
      locations={locations}
      selectedCity={selectedCity}
      handleSelectCity={handleSelectCity}
      handleClearCity={handleClearCity}
    />
  );
};

export default OrdersContainer;
