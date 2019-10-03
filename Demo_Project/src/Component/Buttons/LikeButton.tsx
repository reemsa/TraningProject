import React, { useState } from "react";
import { Button } from "reactstrap";
import { IoIosHeart } from "react-icons/io";
import useStyles from "./LikeButtonStyles";
const LikeButton = ({ number }: { number: number }) => {
  const classes = useStyles();
  const [style, setStyle] = useState(classes.like);
  const handelhover = () => {
    setStyle(classes.onHover);
  };
  const handelout = () => {
    setStyle(classes.like);
  };

  return (
    <div>
      <Button
        className={style}
        onMouseEnter={handelhover}
        onMouseOut={handelout}
      >
        <IoIosHeart></IoIosHeart>
        {number}
      </Button>
    </div>
  );
};
export default LikeButton;
