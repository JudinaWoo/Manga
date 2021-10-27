import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider as ReduxProvider } from "react-redux";

import HomePage from "../home/HomePage";
import SearchPage from "../search/SearchPage";
import MyListPage from "../my-list/MyListPage";

import { homePath, myListPath, searchPath } from "../routes";
import theme from "../ds/theme";
import store from "./store";

export default function App() {
  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  );
}
