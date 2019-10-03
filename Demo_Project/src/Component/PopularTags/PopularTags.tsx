import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TagButton from "../Buttons/TagButton";
import useStyles from "./PopularTagsStyles";
function PopularTags() {
  const classes = useStyles();
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
          <TagButton name="butt"></TagButton>
          <TagButton name="dragons"></TagButton>
          <TagButton name="test"></TagButton>
        </CardActions>
        <CardActions>
          <TagButton name="traning"></TagButton>
          <TagButton name="tags"></TagButton>
          <TagButton name="as"></TagButton>
          <TagButton name="coffee"></TagButton>
        </CardActions>
        <CardActions>
          <TagButton name="animation"></TagButton>
          <TagButton name="cars"></TagButton>
          <TagButton name="flowers"></TagButton>
          <TagButton name="baby"></TagButton>
        </CardActions>
        <CardActions>
          <TagButton name="money"></TagButton>
          <TagButton name="caramel"></TagButton>
          <TagButton name="japan"></TagButton>
          <TagButton name="happiness"></TagButton>
        </CardActions>
        <CardActions>
          <TagButton name="clean"></TagButton>
          <TagButton name="sugar"></TagButton>
          <TagButton name="sushi"></TagButton>
          <TagButton name="well"></TagButton>
        </CardActions>
        <CardActions>
          <TagButton name="cookies"></TagButton>
        </CardActions>
      </Card>
    </div>
  );
}
export default PopularTags;
