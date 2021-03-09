import { combineReducers } from 'redux';
import userReducer from './UserService/UserSlice';
import rolesReducer from './RolesService/RolesSlice';
import servicesReducer from './ServicesCatalogService/ServicesCatalogSlice';
import locationsReducer from './LocationService/LocationSlice';
import specializationsReducer from './SpecializaionService/SpecializationSlice';
import masterReducer from './MastersService/MastersSlice';
import userOrdersReducer from './UserOrdersService/UserOrdersSlice';
import ordersReducer from './OrdersService/OrdersSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  rules: rolesReducer,
  services: servicesReducer,
  locations: locationsReducer,
  specializations: specializationsReducer,
  masters: masterReducer,
  userOrders: userOrdersReducer,
  orders: ordersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
