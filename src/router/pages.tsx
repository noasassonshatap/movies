import { lazy } from "react";

export const LazyHomePage = lazy(() => import("../features/home/homePage"));
export const LazySearchPage = lazy(
  () => import("../features/search/searchPage")
);
