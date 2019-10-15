import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LikeButton from "../Buttons/LikeButton";
import useStyles from "./ArticleCardStyles";
import { Link } from "react-router-dom";
import TagButton from "./TagButton";
import { axiosGetWithAuthentication } from "../../network/AXIOS";
interface IProps{
  userName:string,
  title: string,
  description:string,
  date:string,
  image:string,
  slug:string
}
const ArticleCard:React.FC<IProps>=(props)=>{
  const classes = useStyles();
  let tagList:any[]=[]
  const [tags,setTags]=useState("")
  useEffect(()=>{
        axiosGetWithAuthentication(`articles/${props.slug}`).then((res)=>{
            setTags(res.data.article.tagList)
          })
},[props.slug])
  for(let i=0;i<tags.length;i++){
    tagList.push(<TagButton data={tags[i]}></TagButton>)
}
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar>
            <CardMedia
              className={classes.media}
              image={props.image}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <LikeButton number={0}></LikeButton>
          </IconButton>
        }
        title={<Link className={classes.userName} to={`/author/${props.userName}`}>{props.userName}</Link>}
        subheader={props.date}
      />

      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <Typography className={classes.cont}><div className={classes.tags}>{tagList}</div></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="caption" color="textSecondary">
          <Link className={classes.read}  to={`/article/${props.slug}`}>Read more...</Link>
        </Typography>
      </CardActions>
    </Card>
  );
}
export default ArticleCard;
