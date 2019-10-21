import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./TagButtonStyles";
interface TagButtonProps {
  name: string;
  onClick: (tagButton: string) => void;
}
const TagButton: React.FC<TagButtonProps> = ({ name, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => onClick(name)}
      size="small"
    >
      {name}
    </Button>
  );
};
export default TagButton;
