import React from "react";
import useStyles from "./ArticleTagButtonStyle";
import Button from "@material-ui/core/Button";
interface TagButtonProps {
  data: string;
}
const TagButton: React.FC<TagButtonProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <button 
    disabled 
    className={classes.button}
    >
      {data}
    </button>
  );
};
export default TagButton;
