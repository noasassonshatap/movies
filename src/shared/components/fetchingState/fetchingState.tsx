import { Skeleton } from "@mui/material";
import ErrorPage from "../../layout/errorPage/errorPage";
import { UseQueryResult } from "react-query";

interface FetchingStateProps<T> {
  queryResult: UseQueryResult<T, Error>;
  children: React.ReactNode;
}

const FetchingState = <T,>({
  queryResult,
  children,
}: FetchingStateProps<T>) => {
  if (queryResult.isError) {
    return <ErrorPage />;
  }

  if (queryResult.isLoading) {
    return <Skeleton variant="text" width="100%" height="100%" />;
  }

  if (queryResult.isSuccess) {
    return <>{children}</>;
  }

  return <> </>;
};
export default FetchingState;
