import React from 'react';
import { Link } from 'react-router-dom';

export const Course: React.FC = () => {
  return (
    <>
      <Link to="/home">Back</Link>
      <h1>Course</h1>
      <Link to="/lesson/123">Lesson</Link>
      <Link to="/discussion/123">Discussion</Link>
    </>
  );
};
