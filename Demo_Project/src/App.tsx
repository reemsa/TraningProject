import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./Component/Header/Header";
import Register from "./pages/Register";
import Footer from "./Component/Footer/Footer";
import Article from './pages/Article'
import SettingsPage from './pages/SettingsPage';
function App() {
  return (
    <div>
      <Router>
        <Header loginFlage={false} userName={"reem"}></Header>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/article" component={Article}></Route>
        <Route path="/settings" component={SettingsPage}></Route>
        <Footer></Footer>
      </Router>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
