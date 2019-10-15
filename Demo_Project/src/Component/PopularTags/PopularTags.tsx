import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TagButton from "../Buttons/TagButton";
import useStyles from "./PopularTagsStyles";
import {axiosGet} from '../../network/AXIOS'
interface IProps{
  onClick:(tagButton:string)=>void
}
const PopularTags:React.FC<IProps>=({onClick})=>{
  const classes = useStyles();
  const [tags,setTags]=useState([]);
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
          <TagButton onClick={onClick} name={tags[0]}/>
          <TagButton onClick={onClick} name={tags[1]}/>
          <TagButton onClick={onClick} name={tags[2]}/>
          <TagButton onClick={onClick} name={tags[3]}/>
        </CardActions>
        <CardActions>
          <TagButton onClick={onClick} name={tags[4]}/>
          <TagButton onClick={onClick} name={tags[5]}/>
          <TagButton onClick={onClick} name={tags[6]}/>
          <TagButton onClick={onClick} name={tags[7]}/>
        </CardActions>
        <CardActions>
          <TagButton onClick={onClick} name={tags[8]}/>
          <TagButton onClick={onClick} name={tags[9]}/>
          <TagButton onClick={onClick} name={tags[10]}/>
          <TagButton onClick={onClick} name={tags[11]}/>
        </CardActions>
        <CardActions>
          <TagButton onClick={onClick} name={tags[12]}/>
          <TagButton onClick={onClick} name={tags[13]}/>
          <TagButton onClick={onClick} name={tags[14]}/>
          <TagButton onClick={onClick} name={tags[15]}/>
        </CardActions>
        <CardActions>
          <TagButton onClick={onClick} name={tags[16]}/>
          <TagButton onClick={onClick} name={tags[17]}/>
          <TagButton onClick={onClick} name={tags[18]}/>
          <TagButton onClick={onClick} name={tags[19]}/>
        </CardActions>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
export default PopularTags;
