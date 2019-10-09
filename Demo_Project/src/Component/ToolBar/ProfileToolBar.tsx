import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./ProfileToolBarStyles";
import Paper from '@material-ui/core/Paper';
import MyFeed from './MyFeed';
import FavoritedFeed from './FavoritedFeed'
interface IProps{
    userName:string
}
const ToolBar:React.FC<IProps>=({userName})=>{
  const classes = useStyles();
  const [yourStyle, setyourStyle] = useState(classes.title);
  const [globalStyle, setglobalStyle] = useState(classes.disabledTitle);
  const [data, setData] = useState(<MyFeed userName={userName}/>);
  const yourFeedhandelclick = () => {
    setyourStyle(classes.title);
    setglobalStyle(classes.disabledTitle);
    setData(<MyFeed userName={userName}/>);
  };
  const globalFeedhandelclick = () => {
    setyourStyle(classes.disabledTitle);
    setglobalStyle(classes.title);
    setData(<FavoritedFeed userName={userName}/>);
  };
  return (
    <div className={classes.div}>
      <Paper className={classes.paper}>
        <Toolbar className={classes.toolBar}>
          <Typography
            variant="body2"
            className={yourStyle}
            onClick={yourFeedhandelclick}
          >
            My Articles
          </Typography>
          <Typography
            variant="body2"
            className={globalStyle}
            onClick={globalFeedhandelclick}
          >
            Favorited Articles
          </Typography>
        </Toolbar>
        <div className={classes.content}>{data}</div>
        </Paper>
      
    </div>
  );
}
export default ToolBar
