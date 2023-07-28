import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface Route {
    to: string;
    path: string;
    Component: () => JSX.Element;
    name: string;
}

const routes: Route[] = [
  {
    to: "/Lazy1",
    path: "lazy1",
    Component: LazyPage1,
    name: 'Lazy-1'
  },
  {
    to: "/Lazy2",
    path: "lazy2",
    Component: LazyPage2,
    name: 'Lazy-2'
  },
  {
    to: "/Lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: 'Lazy-3'
  }
];

export default routes;
