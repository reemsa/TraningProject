import React from "react";
import BannerPage from './Bannnerpage'
import Grid from "@material-ui/core/Grid";
import ToolBar from "../Component/ToolBar/ToolBar";
import PageNumbers from "../Component/PageNumber/PageNumbers";
import ArticleCard from "../Component/Artical/ArticleCard";
import PopularTags from "../Component/PopularTags/PopularTags";
import useStyles from './HomeStyle'
interface IProps{
  user?:string,
}
const Home:React.FC<IProps>=({user})=>{
  const classes = useStyles();
  return (
    <>
      <BannerPage title={"conduit"}></BannerPage>
      <Grid container spacing={3} className={classes.right}>
        <Grid item xs={6}>
          <ToolBar contentData={<ArticleCard  userName= "reem" title= "it is about good person"  articleName="reem article" date="September 14, 2016"></ArticleCard>}></ToolBar>
          <PageNumbers></PageNumbers>
        </Grid>
        <Grid item xs={6}>
          <PopularTags></PopularTags>
        </Grid>
      </Grid>
      </>
  );
}

export default Home;
