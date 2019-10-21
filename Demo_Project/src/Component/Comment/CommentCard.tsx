import React, { useState, useEffect } from "react";
import useStyles from "./CommentCardStyle";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { axiosDeleteWithAuthentication } from "../../network/AXIOS";
interface CommentCardProps {
  deleting: boolean;
  userName: string;
  updateDate: string;
  imageURL: string;
  commentData: string;
  slug: string;
  id: number;
}
const CommentCard: React.FC<CommentCardProps> = ({
  userName,
  updateDate,
  imageURL,
  commentData,
  deleting,
  slug,
  id
}) => {
  const classes = useStyles();
  const [data, setData] = useState(commentData);
  const [name, setName] = useState(userName);
  const [date, setDate] = useState(updateDate);
  const [image, setImage] = useState(imageURL);
  useEffect(() => {
    setName(userName);
    setDate(updateDate);
    setImage(imageURL);
    setData(commentData);
  }, [userName, updateDate, imageURL, commentData]);
  const deleteHandler = () => {
    axiosDeleteWithAuthentication(`articles/${slug}/comments/${id}`).then(
      () => {
      }
    );
  };
  return (
    <Card className={classes.card}>
      <Typography className={classes.textField}>{data}</Typography>
      <div className={classes.div}>
        <CardMedia className={classes.media} image={image} />
        <Typography>
          {" "}
          <Link to={`/author/${name}`} className={classes.link}>
            {name}
          </Link>
          <Moment
            className={classes.date}
            format={"MMMM D, YYYY"}
            date={date}
          />
          {deleting ? (
            <span className={classes.span}>
              <button onClick={deleteHandler} className={classes.deleteButton}>
                <DeleteOutlineIcon />
              </button>
            </span>
          ) : null}
        </Typography>
      </div>
    </Card>
  );
};
export default CommentCard;
