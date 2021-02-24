import { combineReducers } from 'redux';
import userReducer from './UserService/UserSlice';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
