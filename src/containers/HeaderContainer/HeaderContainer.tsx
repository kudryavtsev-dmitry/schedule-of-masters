import React from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../../components';
import { logOutUser } from '../../services/UserService/UserServices';

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return <Header handleLogOut={handleLogOut} />;
};

export default HeaderContainer;
