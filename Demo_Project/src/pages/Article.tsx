import React from "react";
import NewArticle from "../Component/Artical/NewArticle";
import { RouteComponentProps } from "react-router-dom";
const Article: React.FC<RouteComponentProps<{ slug: string }>> = props => {
  const slug = props.match.params.slug;
  return <NewArticle slug={slug}></NewArticle>;
};
export default Article;
