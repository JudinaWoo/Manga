import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import HomePage from "../home/HomePage";
import SearchPage from "../search/SearchPage";
import MyListPage from "../my-list/MyListPage";

import { homePath, myListPath, searchPath } from "../routes";
import theme from "../ds/theme";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route exact path={homePath}>
              <HomePage />
            </Route>
            <Route path={searchPath}>
              <SearchPage />
            </Route>
            <Route path={myListPath}>
              <MyListPage />
            </Route>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
