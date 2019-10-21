import React from "react";
import Popover from "@material-ui/core/Popover";
import { Typography } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import useStyles from "./ToolTipStyles";
interface ToolTipProps {
  id: string | undefined;
  anchorEl: Element;
  open: boolean;
  onClose: () => void;
  email: string;
}
const ToolTip: React.FC<ToolTipProps> = ({ id, email, onClose, anchorEl, open }) => {
  const classes = useStyles();
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
    >
      <Typography className={classes.typography}>
        {" "}
        <ErrorOutlineIcon /> please include an @ in the email. {email} is
        missing @{" "}
      </Typography>
    </Popover>
  );
};
export default ToolTip;
