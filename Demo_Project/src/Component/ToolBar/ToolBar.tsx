import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./ToolBarStyles";
import GlobalFeed from "./GlobalFeed";
import YourFeed from "./YourFeed";
import { getUser } from "../../network/user";
import TagFeed from "./TagFeed";
interface IProps{
  tagName:string
}
const ToolBar:React.FC<IProps>=({tagName})=>{
  const classes = useStyles();
  let defaultStyle=classes.disabledTitle
  let x=<YourFeed/>;
  if((getUser()=="null"||getUser()==null)){
     x=<GlobalFeed/>;
     defaultStyle=classes.title
  }
  const [yourStyle, setyourStyle] = useState(classes.title);
  const [globalStyle, setglobalStyle] = useState(defaultStyle);
  const [tagStyle, setTagStyle] = useState(classes.disabledTitle);
  const [data, setData] = useState(x);
  useEffect(()=>{
      if(tagName!=""&&tagName!=null){
        setyourStyle(classes.disabledTitle);
        setglobalStyle(classes.disabledTitle);
        setTagStyle(classes.title);
        setData(<TagFeed tagName={tagName}/>);
      }
  },[tagName])
  const yourFeedhandelclick = () => {
    setyourStyle(classes.title);
    setglobalStyle(classes.disabledTitle);
    setTagStyle(classes.disabledTitle);
    setData(<YourFeed/>);
  };
  const globalFeedhandelclick = () => {
    setyourStyle(classes.disabledTitle);
    setglobalStyle(classes.title);
    setTagStyle(classes.disabledTitle);
    setData(<GlobalFeed/>);
  };
  const tagFeedhandelclick = () => {
    setyourStyle(classes.disabledTitle);
    setglobalStyle(classes.disabledTitle);
    setTagStyle(classes.title);
    setData(<TagFeed tagName={tagName}/>);
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
          {(tagName==""||tagName==null)?null:<Typography
            variant="body2"
            className={tagStyle}
            onClick={tagFeedhandelclick}
          >
           #{tagName}
          </Typography>}
        </Toolbar>
      </div>
      <div className={classes.content}>{data}</div>
    </div>
  );
}
export default ToolBar
