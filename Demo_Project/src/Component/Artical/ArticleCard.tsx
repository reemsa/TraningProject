import React from "react";
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
interface IProps{
  userName:string,
  title: string,
  description:string,
  date:string,
  image:string
}
const ArticleCard:React.FC<IProps>=(props)=>{
  const classes = useStyles();
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
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="caption" color="textSecondary">
          <Link className={classes.read}  to="/author">Read more...</Link>
        </Typography>
      </CardActions>
    </Card>
  );
}
export default ArticleCard;
