import React from 'react';
import { Link } from 'react-router-dom';
import { View, ViewProps } from '../View';
import { getRandomHexColor } from '../utils';

const background = getRandomHexColor();

export const Lesson: React.FC<ViewProps> = (props) => {
  return (
    <View background={background} {...props}>
      <Link to="/course/123">Back</Link>
      <h1>Lesson</h1>
    </View>
  );
};
