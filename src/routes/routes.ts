import { Path, RouteData } from './types';
import { Login } from 'components/login/Login';
import { Home } from 'components/home/Home';
import { Course } from 'components/course/Course';
import { Lesson } from 'components/lesson/Lesson';
import { Discussion } from 'components/discussion/Discussion';

export const routes: Record<Path, RouteData> = {
  '/login': {
    component: Login,
    stackIndex: 0,
    isPublic: true,
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
