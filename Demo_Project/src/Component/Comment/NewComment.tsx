import React, { useState } from "react";
import useStyles from './NewCommentStyle'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { getUser } from "../../network/user";
import { axiosPostWithAuthentication } from "../../network/AXIOS";
interface IProps{
  slug:string
}

const NewComment:React.FC<IProps>=({slug})=> {
  const classes = useStyles();
  const image=JSON.parse(getUser() as string).image
  const [textValue,setTextValue]=useState()
  const postHandler=()=>{
    let body={
      "comment":{
        "body":textValue
      }
    }
    axiosPostWithAuthentication(`articles/${slug}/comments`,body).then((res)=>{
      console.log(res.data)
      setTextValue("")
    })
  }
  return (
    <Card className={classes.card}>
      <TextField
        id="standard-multiline-static"
        multiline
        rows="4"
        placeholder="Write a comment..."
        className={classes.textField}
        value={textValue}
        onChange={(event)=>{setTextValue(event.target.value)}}
      />
      <div className={classes.div}>
        <CardMedia
          className={classes.media}
          image={
            image
          }
        />
        <Button onClick={postHandler} className={classes.button}>Post Comment</Button>
      </div>
    </Card>
  );
}
export default NewComment