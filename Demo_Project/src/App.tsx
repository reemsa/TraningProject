import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Article from "./pages/Article";
import ArticlePage from "./pages/ArticlePage";
import AuthorPage from "./pages/AuthorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import SettingsPage from "./pages/SettingsPage";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/editor/:slug" component={Article}/>
        <Route path="/settings" component={SettingsPage}/>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/author/:user" component={AuthorPage}/>
        <Route path="/article/:slug" component={ArticlePage}/>
        <Footer />
      </Router>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
