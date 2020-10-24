import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import Home from "./views/Home";
import BaseHeader from "./components/BaseHeader";
import BaseFooter from "./components/BaseFooter";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseHeader />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <BaseFooter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
