import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { routes, Path, getMatchingRoute, getStackIndexDiff } from './routes';

const variants = {
  initial: (diff: number) => {
    if (diff < 0) {
      return { x: 0 };
    }

    if (diff === 0) {
      return { opacity: 0 };
    }

    return { x: '100%' };
  },
  animate: (diff: number) => {
    if (diff === 0) {
      return { opacity: 1 };
    }

    return { x: 0 };
  },
  // Value of this function parameter comes from AnimatePresence custom prop
  exit: (diff: number) => {
    if (diff < 0) {
      return { x: '100%' };
    }

    if (diff === 0) {
      return { opacity: 0 };
    }

    return { x: 0 };
  },
};

const App: React.FC = () => {
  const location = useLocation();

  const prevRoute = React.useRef<Path>();

  const diff = getStackIndexDiff(
    prevRoute.current,
    getMatchingRoute(location.pathname)
  );

  return (
    <Container>
      <AnimatePresence initial={false} custom={diff}>
        <Switch key={location.pathname} location={location}>
          {Object.entries(routes).map(([path, data]) => (
            <Route
              exact={true}
              path={path}
              render={({ match }) => {
                prevRoute.current = match.path as Path;

                return (
                  <data.component
                    custom={diff}
                    variants={variants}
                    stackIndex={data.stackIndex}
                  />
                );
              }}
            />
          ))}
          <Redirect to="/login" />
        </Switch>
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export default App;
