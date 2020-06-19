import React from 'react';
import { Link } from 'react-router-dom';
import { View, ViewProps } from '../View';
import { getRandomHexColor } from '../utils';

const background = getRandomHexColor();

export const Home: React.FC<ViewProps> = (props) => {
  return (
    <View background={background} {...props}>
      <Link to="/login">Logout</Link>
      <h1>Home</h1>
      <Link to={'/course/123'}>Course</Link>
    </View>
  );
};
