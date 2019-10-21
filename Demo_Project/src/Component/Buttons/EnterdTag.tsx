import React from "react";
import useStyles from "./EnterdTagStyle";
import ClearIcon from "@material-ui/icons/Clear";
interface EnterdTagProps {
  data: string;
  onClickHandler: (tagValue: string) => void;
}
const EnterdTag: React.FC<EnterdTagProps> = ({ data, onClickHandler }) => {
  const classes = useStyles();
  return (
    <button disabled className={classes.button}>
      <button
        className={classes.clearIconButton}
        onClick={() => onClickHandler(data)}
      >
        <ClearIcon className={classes.clearIcon} />
      </button>
      {data}
    </button>
  );
};
export default EnterdTag;
