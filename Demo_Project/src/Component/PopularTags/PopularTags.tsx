import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TagButton from "../Buttons/TagButton";
import useStyles from "./PopularTagsStyles";
import {axiosGet} from '../../network/AXIOS'
const PopularTags:React.FC=()=>{
  const classes = useStyles();
   const [tags,setTags]=useState([]);
   let tagsButton:any=[]
   useEffect(() => {
    axiosGet("tags").then(res => {
      setTags(res.data.tags)
    })
  }, []);
  return (
   
    <div className={classes.div}>
      {" "}
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            Popular Tags
          </Typography>
        </CardContent>
        <CardActions>
          <TagButton name={tags[0]}/>
          <TagButton name={tags[1]}/>
          <TagButton name={tags[2]}/>
          <TagButton name={tags[3]}/>
        </CardActions>
        <CardActions>
          <TagButton name={tags[4]}/>
          <TagButton name={tags[5]}/>
          <TagButton name={tags[6]}/>
          <TagButton name={tags[7]}/>
        </CardActions>
        <CardActions>
          <TagButton name={tags[8]}/>
          <TagButton name={tags[9]}/>
          <TagButton name={tags[10]}/>
          <TagButton name={tags[11]}/>
        </CardActions>
        <CardActions>
          <TagButton name={tags[12]}/>
          <TagButton name={tags[13]}/>
          <TagButton name={tags[14]}/>
          <TagButton name={tags[15]}/>
        </CardActions>
        <CardActions>
          <TagButton name={tags[16]}/>
          <TagButton name={tags[17]}/>
          <TagButton name={tags[18]}/>
          <TagButton name={tags[19]}/>
        </CardActions>
      </Card>
    </div>
  );
}
export default PopularTags;
