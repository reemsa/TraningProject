import React, { useState } from "react";
import { Button } from "reactstrap";
import { IoIosHeart } from "react-icons/io";
import useStyles from "./LikeButtonStyles";
interface IProps{
  number:number
}
const LikeButton:React.FC<IProps> = ({ number }) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.button}
      >
        <IoIosHeart></IoIosHeart>
        {number}
      </Button>
    </div>
  );
};
export default LikeButton;
