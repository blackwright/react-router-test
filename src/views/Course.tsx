import React from 'react';
import { Link } from 'react-router-dom';
import { View, ViewProps } from '../View';
import { getRandomHexColor } from '../utils';

const background = getRandomHexColor();

export const Course: React.FC<ViewProps> = (props) => {
  return (
    <View background={background} {...props}>
      <Link to="/home">Back</Link>
      <h1>Course</h1>
      <Link to="/lesson/123">Lesson</Link>
      <Link to="/discussion/123">Discussion</Link>
    </View>
  );
};
