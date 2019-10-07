import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./ToolBarStyles";
interface IProps{
  contentData:any
}
const ToolBar:React.FC<IProps>=({contentData})=>{
  const classes = useStyles();
  const [yourStyle, setyourStyle] = useState(classes.title);
  const [globalStyle, setglobalStyle] = useState(classes.disabledTitle);
  const [data, setData] = useState(contentData);
  const yourFeedhandelclick = () => {
    setyourStyle(classes.title);
    setglobalStyle(classes.disabledTitle);
    setData(contentData);
  };
  const globalFeedhandelclick = () => {
    setyourStyle(classes.disabledTitle);
    setglobalStyle(classes.title);
    setData("bye");
  };
  return (
    <div>
      <div>
        <Toolbar className={classes.toolBar}>
          <Typography
            variant="body2"
            className={yourStyle}
            onClick={yourFeedhandelclick}
          >
            Your feed
          </Typography>
          <Typography
            variant="body2"
            className={globalStyle}
            onClick={globalFeedhandelclick}
          >
            Global feed
          </Typography>
        </Toolbar>
      </div>
      <div className={classes.content}>{data}</div>
    </div>
  );
}
export default ToolBar
