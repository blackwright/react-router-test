import React from 'react';
import { Link } from 'react-router-dom';

export const Discussion: React.FC = () => {
  return (
    <>
      <Link to="/course/123">Back</Link>
      <h1>Discussion</h1>
    </>
  );
};
