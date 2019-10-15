import React, { useState } from "react";
import BannerPage from './Bannnerpage'
import Grid from "@material-ui/core/Grid";
import ToolBar from "../Component/ToolBar/ToolBar";
import PopularTags from "../Component/PopularTags/PopularTags";
import useStyles from './HomeStyle'
interface IProps{
  user?:string,

}
const Home:React.FC<IProps>=({user})=>{
  const classes = useStyles();
  const [tagName,setTagName]=useState("")
  const tagButtonHandler=(tagButton:string)=>{
    setTagName(tagButton)
  }
  return (
    <>
      <BannerPage title={"conduit"}></BannerPage>
      <Grid container spacing={3} className={classes.right}>
        <Grid item xs={6}>
          <ToolBar tagName={tagName}></ToolBar>
        </Grid>
        <Grid item xs={6}>
          <PopularTags onClick={tagButtonHandler}></PopularTags>
        </Grid>
      </Grid>
      </>
  );
}

export default Home;
