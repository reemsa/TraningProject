import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./TagButtonStyles";
interface IProps{
  name:string
}
const TagButton:React.FC<IProps>=({name})=>{
  const classes = useStyles();
  return (
      <Button className={classes.button} size="small">
        {name}
      </Button>
  );
}
export default TagButton;
