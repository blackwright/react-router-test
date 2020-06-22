import * as H from 'history';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { routes } from 'routes/routes';
import { transitions } from 'routes/transitions';
import { getMatchingRoute, getStackIndexDiff } from 'routes/utils';
import { Path, RouteData } from 'routes/types';
import { useAuth } from 'hooks/useAuth';
import { View } from './View';

type Props = {
  location: H.Location;
};

export const Router: React.FC<Props> = React.memo(({ location }) => {
  const previousPathRef = React.useRef<Path>();

  const diff = getStackIndexDiff(
    previousPathRef.current,
    getMatchingRoute(location.pathname)
  );

  const { isLoggedIn } = useAuth();

  return (
    <AnimatePresence initial={false} custom={diff}>
      <Switch key={location.pathname} location={location}>
        <Redirect exact={true} from="/" to="/home" />

        {(Object.entries(routes) as Array<[Path, RouteData]>).map(
          ([path, data]) => {
            return (
              <Route
                key={path}
                exact={true}
                path={path}
                render={() => {
                  // We can keep track of the previously rendered path
                  // by using a mutable ref, without causing the re-renders
                  // that would happen if we used Redux or a hook
                  if (data.isPublic || isLoggedIn) {
                    previousPathRef.current = path;
                  }

                  return (
                    <View
                      custom={diff}
                      variants={transitions}
                      stackIndex={data.stackIndex}
                    >
                      {data.isPublic || isLoggedIn ? (
                        <data.component />
                      ) : (
                        <Redirect to="/login" />
                      )}
                    </View>
                  );
                }}
              />
            );
          }
        )}

        <Redirect to="/home" />
      </Switch>
    </AnimatePresence>
  );
});
