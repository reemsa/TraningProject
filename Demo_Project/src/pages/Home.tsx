import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import PopularTags from "../Component/PopularTags/PopularTags";
import BannerPage from "./Bannnerpage";
import useStyles from "./HomeStyle";
import ToolbarPage from './ToolbarPage'

const Home: React.FC = () => {
  const classes = useStyles();
  const [tagName, setTagName] = useState("");
  const tagButtonHandler = (tagButton: string) => {
    setTagName(tagButton);
  };
  
  return (
    <>
      <BannerPage title={"conduit"} subTitle={"A place to share your knowledge."}></BannerPage>
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={1}/>
          <Grid item xs={6}>
            <ToolbarPage tagName={tagName} />
          </Grid>
          <Grid item xs>
            <PopularTags onClick={tagButtonHandler}/>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
