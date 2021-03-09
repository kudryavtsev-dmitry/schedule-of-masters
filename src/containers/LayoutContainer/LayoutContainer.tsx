import { CircularProgress } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../../components';
import { RootState } from '../../services';
import { loadLocationsAsync } from '../../services/LocationService/LocationService';
import { loadMastersAsync } from '../../services/MastersService/MastersService';
import { loadServicesAsync } from '../../services/ServicesCatalogService/ServicesCatalogService';
import { loadSpecializationsAsync } from '../../services/SpecializaionService/SpecializationsService';

const LayoutContainer: FC = () => {
  const role = useSelector((state: RootState) => state.user.role);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadServicesAsync());
    dispatch(loadSpecializationsAsync());
    dispatch(loadLocationsAsync());
    dispatch(loadMastersAsync());
  }, []);

  if (role) {
    return <Layout role={role} />;
  }
  return null;
};

export default LayoutContainer;
