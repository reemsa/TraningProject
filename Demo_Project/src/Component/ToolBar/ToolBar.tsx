import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./ToolBarStyles";
import GlobalFeed from "./GlobalFeed";
import YourFeed from "./YourFeed";
import { getUser } from "../../network/user";
const ToolBar:React.FC=()=>{
  const classes = useStyles();
  let defaultStyle=classes.disabledTitle
  let x=<YourFeed/>;
  if((getUser()=="null"||getUser()==null)){
     x=<GlobalFeed/>;
     defaultStyle=classes.title
  }
  const [yourStyle, setyourStyle] = useState(classes.title);
  const [globalStyle, setglobalStyle] = useState(defaultStyle);
  const [data, setData] = useState(x);
  const yourFeedhandelclick = () => {
    setyourStyle(classes.title);
    setglobalStyle(classes.disabledTitle);
    setData(<YourFeed/>);
  };
  const globalFeedhandelclick = () => {
    setyourStyle(classes.disabledTitle);
    setglobalStyle(classes.title);
    setData(<GlobalFeed/>);
  };
  return (
    <div>
      <div>
        <Toolbar className={classes.toolBar}>
          {(getUser()=="null"||getUser()==null)?null:<Typography
            variant="body2"
            className={yourStyle}
            onClick={yourFeedhandelclick}
          >
            Your feed
          </Typography>}

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
