import React, { useState } from "react";
import useStyles from "./PageNumbersStyles";
import { Button } from "@material-ui/core";
const PageNumbers:React.FC=()=>{
  const classes = useStyles();
  const pageNumer = 50;
  const arrButtons=[]
  const handelClick = (event: any) => {
    let id = event.target.id;
    let element = document.getElementById(id);
    for (let i = 1; i <= pageNumer; i++) {
      if (i != id) {
        let el = document.getElementById(i.toString());
        if (el) {
          el.className = classes.button;
        }
      }
    }
    if (element != null) {
      element.className = classes.click;
    }
  };
  for (let i = 1; i <= pageNumer; i++) {
    arrButtons.push(
      <button
      key={i.toString()}
        id={i.toString()}
        className={classes.button}
        onClick={handelClick}
      >
        {i}
      </button>
    );
  }
  return <div className={classes.div}>{arrButtons}</div>;
}
export default PageNumbers;
