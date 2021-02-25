import { combineReducers } from 'redux';
import userReducer from './UserService/UserSlice';
import rolesReducer from './RolesService/RolesSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  rules: rolesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
