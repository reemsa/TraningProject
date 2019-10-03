import React from "react";
import Banner from "../Component/Banner/Banner";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import ToolBar from "../Component/ToolBar/ToolBar";
import PageNumbers from "../Component/PageNumber/PageNumbers";
import ArticleCard from "../Component/Artical/ArticleCard";
import PopularTags from "../Component/PopularTags/PopularTags";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  right: {
    paddingLeft: 150
  }
}));
function Home({user}:{user?:any}) {
  const flage=false
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Banner token={flage} appName={"conduit"}></Banner>
      <Grid container spacing={3} className={classes.right}>
        <Grid item xs={6}>
          <ToolBar propsdata={<ArticleCard></ArticleCard>}></ToolBar>
          <PageNumbers></PageNumbers>
        </Grid>
        <Grid item xs={6}>
          <PopularTags></PopularTags>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
