import { PathRouteProps } from "react-router-dom";
import { TLayoutProps } from "../shared/layout/layout";
import { LazyHomePage } from "./pages";
import { Paths } from "./paths";
import ErrorPage from "../shared/layout/errorPage/errorPage";

export interface RouterProps extends PathRouteProps {
  layoutProps?: TLayoutProps;
}

export const routesData: RouterProps[] = [
  {
    path: Paths.HOME,
    element: <LazyHomePage />,
    layoutProps: {
      headerProps: {
        title: "מסך בית",
        allowGoBack: false,
        drawer: true,
      },
    },
  },
  {
    path: "*",
    element: <ErrorPage />,
    layoutProps: {
      header: false,
    },
  },
];
