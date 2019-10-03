import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Header from "./Header";
import Register from "../../pages/Register";
import Article from "../../pages/Article";
import Settings from "../settings/Settings";
storiesOf("Header", module).add("Header", () => (
  <Router>
    <Header loginFlage={false} userName="Reem"></Header>
    <Route exact path="/" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/article" component={Article}></Route>
    <Route path="/settings" component={Settings}></Route>
  </Router>
));
