import React from "react";
import { storiesOf } from "@storybook/react";
import ArticleCard from "./ArticleCard";
import NewArticle from './NewArticle'
import ArticleBanner from './ArticleBanner';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthorPage from '../../pages/AuthorPage';
import ArticlePage from '../../pages/ArticlePage';
import Article from '../../pages/Article'
storiesOf("Article", module)
.add("ArticleCard", () => (
    <Router>
        <ArticleCard userName="" title="" description="" date="" image="" slug=""></ArticleCard>
        <Route path="/author/:user" component={AuthorPage}></Route>
        <Route path="/article/:slug" component={ArticlePage}></Route>
  </Router>

))
.add("NewArticle",()=>(<NewArticle slug=""></NewArticle>))
.add("ArticleBanner",()=>(
    <Router>
        <ArticleBanner slug={"new-arrow-functions-in-es6-my56wy"}></ArticleBanner>
        <Route path="/editor/:slug" component={Article}></Route>
  </Router>
))
