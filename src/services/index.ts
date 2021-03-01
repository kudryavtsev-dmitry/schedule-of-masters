import { combineReducers } from 'redux';
import userReducer from './UserService/UserSlice';
import rolesReducer from './RolesService/RolesSlice';
import servicesReducer from './ServicesCatalogService/ServicesCatalogSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  rules: rolesReducer,
  services: servicesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
