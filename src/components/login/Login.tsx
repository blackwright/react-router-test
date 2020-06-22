import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Login: React.FC = () => {
  const { login, isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={login}>Log in</button>
    </>
  );
};
