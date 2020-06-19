import { matchPath } from 'react-router-dom';
import { Login } from './views/Login';
import { Home } from './views/Home';
import { Course } from './views/Course';
import { Lesson } from './views/Lesson';
import { Discussion } from './views/Discussion';

export const routes = {
  '/login': {
    component: Login,
    stackIndex: 0,
  },
  '/home': {
    component: Home,
    stackIndex: 0,
  },
  '/course/:id': {
    component: Course,
    stackIndex: 1,
  },
  '/lesson/:id': {
    component: Lesson,
    stackIndex: 2,
  },
  '/discussion/:id': {
    component: Discussion,
    stackIndex: 2,
  },
};

export type Path = keyof typeof routes;

const pathsArray = Object.keys(routes) as Path[];

// Given '/course/123', returns '/course/:id' from the routes object.
// Returns undefined if no match is found
export function getMatchingRoute(arbitaryPath: string) {
  return pathsArray.find((path) => matchPath(arbitaryPath, { path }));
}

// Diffs the stackIndex between the previous path and the current path,
// to know how to animate the transition between the two components
export function getStackIndexDiff(
  prevRoute: Path | undefined,
  currentRoute: Path | undefined
): number {
  if (!prevRoute || !currentRoute) {
    return 0;
  }

  return routes[currentRoute].stackIndex - routes[prevRoute].stackIndex;
}
