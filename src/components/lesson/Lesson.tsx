import React from 'react';
import { Link } from 'react-router-dom';

export const Lesson: React.FC = () => {
  return (
    <>
      <Link to="/course/123">Back</Link>
      <h1>Lesson</h1>
    </>
  );
};
