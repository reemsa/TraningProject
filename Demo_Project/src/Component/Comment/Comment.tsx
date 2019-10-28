import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./CommentStyle";
import Paper from "@material-ui/core/Paper";
import NewComment from "./NewComment";
import { Link } from "react-router-dom";
import { axiosGetWithAuthentication, axiosGet } from "../../network/AXIOS";
import CommentCard from "./CommentCard";
import { AppState } from "../../store/Store";
import { connect } from "react-redux";
interface CommentProps {
  slug: string;
}
interface IAuthor {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
interface IComment {
  id: number;
  createdAt: string;
  body: string;
  author: IAuthor;
}
interface ConnectedCommentProps
{
  flag: boolean;
  userName:string
}
const Comment: React.FC<CommentProps&ConnectedCommentProps> = ({ slug ,flag,userName}) => {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const commentsList: any = [];
  useEffect(() => {
    if (!flag) {
      axiosGet(`articles/${slug}/comments`).then(res => {
        setComments(res.data.comments);
      });
    } else {
      axiosGetWithAuthentication(`articles/${slug}/comments`).then(res => {
        setComments(res.data.comments);
      });
    }
  }, [slug, comments]);
  let temp: IComment[] = comments;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].author.username == userName) {
      commentsList.push(
        <div className={classes.div}>
          <CommentCard
            id={temp[i].id}
            slug={slug}
            deleting={true}
            userName={temp[i].author.username}
            imageURL={temp[i].author.image}
            updateDate={temp[i].createdAt}
            commentData={temp[i].body}
          ></CommentCard>
        </div>
      );
    } else {
      commentsList.push(
        <div className={classes.div}>
          <CommentCard
            id={temp[i].id}
            slug={slug}
            deleting={false}
            userName={temp[i].author.username}
            imageURL={temp[i].author.image}
            updateDate={temp[i].createdAt}
            commentData={temp[i].body}
          ></CommentCard>
        </div>
      );
    }
  }
  return (
    <Paper className={classes.paper}>
      <Toolbar className={classes.toolBar}></Toolbar>
      <div className={classes.div}>
        {!flag? (
          <div className={classes.linkDiv}>
            <Link className={classes.link} to="/login">
              Sing in
            </Link>{" "}
            or{" "}
            <Link className={classes.link} to="/register">
              Sing up
            </Link>{" "}
            to add comments on this article
          </div>
        ) : (
          <NewComment slug={slug}></NewComment>
        )}
      </div>
      <div className={classes.commentsList}>{commentsList}</div>
    </Paper>
  );
}
const mapStateToProps = (state: AppState) => ({
  flag: state.logInReducer.flag,
  userName:state.logInReducer.userName
})
export default connect(mapStateToProps)(Comment)
