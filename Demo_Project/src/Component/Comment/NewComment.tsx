import React, { useState } from "react";
import useStyles from "./NewCommentStyle";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { axiosPostWithAuthentication } from "../../network/AXIOS";
import { AppState } from "../../store/Store";
import { connect } from "react-redux";
interface NewCommentProps {
  slug: string;
}
interface ConnectedNewCommentProps
{
  imageURL:string
}
const NewComment: React.FC<NewCommentProps&ConnectedNewCommentProps> = ({ slug,imageURL }) => {
  const classes = useStyles();
  const image = imageURL;
  const [textValue, setTextValue] = useState();
  const postHandler = () => {
    const body = {
      comment: {
        body: textValue
      }
    };
    axiosPostWithAuthentication(`articles/${slug}/comments`, body).then(res => {
      setTextValue("");
    });
  };
  return (
    <Card className={classes.card}>
      <div>
      <TextField
        id="standard-multiline-static"
        multiline
        rows="4"
        placeholder="Write a comment..."
        className={classes.textField}
        value={textValue}
        onChange={event => {
          setTextValue(event.target.value);
        }}
      />
      </div>
      <div className={classes.div}>
        <CardMedia className={classes.media} image={image} />
        <Button onClick={postHandler} className={classes.button}>
          Post Comment
        </Button>
      </div>
    </Card>
  );
};
const mapStateToProps = (state:AppState) => ({
  imageURL:state.logInReducer.userImage
})
export default connect(mapStateToProps)(NewComment)
//export default NewComment;
