import React from "react";
import ArticleBanner from "../Component/Artical/ArticleBanner";
import { RouteComponentProps } from "react-router-dom";
import ArticleBody from "../Component/Artical/ArticleBody";
import Grid from "@material-ui/core/Grid";
const ArticlePage: React.FC<RouteComponentProps<{ slug: string }>> = props => {
  const slug = props.match.params.slug;
  return (
    <>
    <ArticleBanner slug={slug}></ArticleBanner>
    <Grid container spacing={3}>
      <Grid item xs={2}/>
      <Grid item xs={8}>
      <ArticleBody slug={slug}></ArticleBody>
      </Grid>
      <Grid item xs/>
    </Grid>
    </>
  );
};
export default ArticlePage;
