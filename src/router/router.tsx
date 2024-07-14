import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment, Suspense } from "react";
import { routesData } from "./routes";
import Layout from "../shared/layout/layout";

const routes = routesData.map((routeData) => {
  const protectedRoute = (
    // TODO - add protected route
    // https://najm-eddine-zaga.medium.com/react-render-multiple-layouts-with-react-router-dom-v6-7a42bd984acf
    <Layout {...routeData.layoutProps}>{routeData.element}</Layout>
  );

  return (
    <Fragment key={routeData.path}>
      <Route path={routeData.path} element={protectedRoute} />
    </Fragment>
  );
});

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>{routes}</Routes>
      </Suspense>
    </BrowserRouter>
  );
};
