import React, { useState } from "react";
import useStyles from "./PageNumbersStyles";
import { Button } from "@material-ui/core";
interface PageNumberProps {
  pageNumber?: number
}

const PageNumbers:React.FC<PageNumberProps>=({pageNumber})=>{
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index:number) => setActiveIndex(index);
  const classes = useStyles();
  const buttons = Array(pageNumber).fill("").map((item, index) => {
    return (
      <button
        key={String(index)}
        id={String(index)}
        onClick={()=>handleClick(index)}
        className={activeIndex==index? classes.click:classes.button}
      >
        {index+1}
      </button>
      )
  });

  return <div className={classes.div}>{buttons}</div>;
}
PageNumbers.defaultProps = {
  pageNumber: 50
}
export default PageNumbers;
