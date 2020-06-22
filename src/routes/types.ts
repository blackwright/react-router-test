import { ViewProps } from 'components/View';

export type Path =
  | '/login'
  | '/home'
  | '/course/:id'
  | '/lesson/:id'
  | '/discussion/:id';

export type RouteData = {
  component: React.FC<ViewProps>;
  stackIndex: number;
  isPublic?: boolean;
};
