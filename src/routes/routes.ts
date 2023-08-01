import { LazyExoticComponent, lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent>| JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

const routes: Route[] = [
  {
    to: "/Lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: 'Lazy-1'
  },
  {
    to: "/Lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: 'Lazy-2'
  },
  {
    to: "/Lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: 'Lazy-3'
  }
];

export default routes;
