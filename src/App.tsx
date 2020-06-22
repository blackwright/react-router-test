import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Router } from 'components/Router';

export const App: React.FC = () => (
  <Container>
    <Route>{({ location }) => <Router location={location} />}</Route>
  </Container>
);

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export default App;
