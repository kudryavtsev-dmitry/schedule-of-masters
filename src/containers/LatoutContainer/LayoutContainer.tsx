import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '../../components';
import { loadLocationsAsync } from '../../services/LocationService/LocationService';
import { loadMastersAsync } from '../../services/MastersService/MastersService';
import { loadServicesAsync } from '../../services/ServicesCatalogService/ServicesCatalogService';
import { loadSpecializationsAsync } from '../../services/SpecializaionService/SpecializationsService';

const LayoutContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(1111);
    dispatch(loadServicesAsync());
    dispatch(loadSpecializationsAsync());
    dispatch(loadLocationsAsync());
    dispatch(loadMastersAsync());
  }, []);

  return <Layout />;
};

export default LayoutContainer;
