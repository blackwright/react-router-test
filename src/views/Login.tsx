import React from 'react';
import { Link } from 'react-router-dom';
import { View, ViewProps } from '../View';
import { getRandomHexColor } from '../utils';

const background = getRandomHexColor();

export const Login: React.FC<ViewProps> = (props) => {
  return (
    <View background={background} {...props}>
      <h1>Login</h1>
      <Link to="/home">Log in</Link>
    </View>
  );
};
