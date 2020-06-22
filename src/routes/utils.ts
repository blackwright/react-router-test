import { matchPath } from 'react-router-dom';
import { routes } from './routes';
import { Path } from './types';

const pathsArray = Object.keys(routes) as Path[];

// Given '/course/123', returns '/course/:id' from the routes object.
// Returns undefined if no match is found
export function getMatchingRoute(arbitaryPath: string) {
  return pathsArray.find((path) =>
    matchPath(arbitaryPath, { exact: true, path })
  );
}

// Diffs the stackIndex between the previous path and the current path,
// to know how to animate the transition between the two components
export function getStackIndexDiff(
  prevRoute: Path | undefined,
  currentRoute: Path | undefined
): number {
  const prevStackIndex = prevRoute ? routes[prevRoute].stackIndex : 0;
  const currentStackIndex = currentRoute ? routes[currentRoute].stackIndex : 0;

  return currentStackIndex - prevStackIndex;
}
