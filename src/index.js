import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Home from "./views/Home";
import * as serviceWorker from "./serviceWorker";

const themes = {
  mainColor: "#fff",
};

document.body.style = "margin: 0; padding: 0;";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themes}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
