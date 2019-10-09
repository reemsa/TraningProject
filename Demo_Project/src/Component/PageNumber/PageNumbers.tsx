import React, { useState } from "react";
import useStyles from "./PageNumbersStyles";
interface PageNumberProps {
  onClick:(index:number)=>void
}

const PageNumbers:React.FC<PageNumberProps>=({onClick})=>{
  const [activeIndex, setActiveIndex] = useState(0);
  const pageNumber=50;
  const handleClick = (index:number) => {
    setActiveIndex(index)
    onClick(index)
  };
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
export default PageNumbers;
