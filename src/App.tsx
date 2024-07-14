import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppRouter } from "./router/router";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { cacheRtl } from "./shared/theme/cache";
import { theme } from "./shared/theme/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
