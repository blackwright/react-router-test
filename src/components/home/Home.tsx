import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <>
      <button onClick={logout}>Logout</button>
      <h1>Home</h1>
      <Link to={'/course/123'}>Course</Link>
    </>
  );
};
