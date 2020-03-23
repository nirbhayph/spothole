// the main routing component. based on the URL, it renders the auth component
// for a particular path.
import React from "react";
import Auth from "./components/authentication";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import NotFound from "./components/not_found";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#2997f7"
    },
    secondary: {
      main: "#ff0000"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#333"
      }
    },
    MuiStepper: {
      root: {
        padding: "0px"
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route path="/report" exact>
              <Auth linkTo="/report" />
            </Route>
            <Route path="/profile" exact>
              <Auth linkTo="/profile" />
            </Route>
            <Route path="/logout" exact>
              <Auth linkTo="/logout" />
            </Route>
            <Route path="/routing" exact>
              <Auth linkTo="/routing" />
            </Route>
            <Route path="/dashboard" exact>
              <Auth linkTo="/dashboard" />
            </Route>
            <Route path="/" exact>
              <Auth linkTo="/dashboard" />
            </Route>
            <Route path="*" exact={true} component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
