import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./TagButtonStyles";
function TagButton({ name }: { name: string }) {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.button} size="small">
        {name}
      </Button>
    </div>
  );
}
export default TagButton;
