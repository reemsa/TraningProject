import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CommentCard from './CommentCard'
import AuthorPage from '../../pages/AuthorPage'
storiesOf("comment", module)
  .add("commentCard", () => 
  <Router>
  <CommentCard userName="Hanady" updateDate="10/2/2019" commentData="vbjhgfghjkl" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPHOcUtBX52RrKeih3gviWrZxR7RCL3WAGHq-ZJ2-yj94lnHx"></CommentCard>
  <Route path="/author/:user" component={AuthorPage}></Route>
</Router>
)
