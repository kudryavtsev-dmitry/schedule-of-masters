import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '../../components';
import { loadServicesAsync } from '../../services/ServicesCatalogService/ServicesCatalogService';

const LayoutContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(1111);
    dispatch(loadServicesAsync());
  }, []);

  return <Layout />;
};

export default LayoutContainer;
