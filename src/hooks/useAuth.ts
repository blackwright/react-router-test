import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from 'store/slices/user';

export function useAuth() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state: RootState) => !!state.user.token);

  const login = React.useCallback(() => {
    dispatch(userSlice.actions.login());
  }, [dispatch]);

  const logout = React.useCallback(() => {
    dispatch(userSlice.actions.logout());
  }, [dispatch]);

  return React.useMemo(() => ({ isLoggedIn, login, logout }), [
    isLoggedIn,
    login,
    logout
  ]);
}
