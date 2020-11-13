import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Project from "./views/Project";
import Contact from "./views/Contact";
import Cgu from "./views/Cgu";
import BaseFooter from "./components/BaseFooter";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projets" component={Projects} />
        <Route exact path="/projets/:id" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cgu" component={Cgu} />
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
