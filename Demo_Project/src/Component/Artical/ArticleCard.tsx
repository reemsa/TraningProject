import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
//need it to show user photo when get from database
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LikeButton from "../Buttons/LikeButton";
import useStyles from "./ArticleCardStyles";
interface IProps{
  userName: "reem",
  title: "it is about good person",
  articleName:"reem article",
  date:"September 14, 2016"
}
const ArticleCard:React.FC<IProps>=(props)=>{
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <LikeButton number={0}></LikeButton>
          </IconButton>
        }
        title={props.userName}
        subheader={props.date}
      />

      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
          {props.articleName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="caption" color="textSecondary">
          read more...
        </Typography>
      </CardActions>
    </Card>
  );
}
export default ArticleCard;
