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
          <TagButton name="butt"/>
          <TagButton name="dragons"/>
          <TagButton name="test"/>
        </CardActions>
        <CardActions>
          <TagButton name="traning"/>
          <TagButton name="tags"/>
          <TagButton name="as"/>
          <TagButton name="coffee"/>
        </CardActions>
        <CardActions>
          <TagButton name="animation"/>
          <TagButton name="cars"/>
          <TagButton name="flowers"/>
          <TagButton name="baby"/>
        </CardActions>
        <CardActions>
          <TagButton name="money"/>
          <TagButton name="caramel"/>
          <TagButton name="japan"/>
          <TagButton name="happiness"/>
        </CardActions>
        <CardActions>
          <TagButton name="clean"/>
          <TagButton name="sugar"/>
          <TagButton name="sushi"/>
          <TagButton name="well"/>
        </CardActions>
        <CardActions>
          <TagButton name="cookies"/>
        </CardActions>
      </Card>
    </div>
  );
}
export default PopularTags;
