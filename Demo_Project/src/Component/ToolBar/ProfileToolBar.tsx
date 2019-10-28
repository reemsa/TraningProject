import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./ProfileToolBarStyles";
import Paper from "@material-ui/core/Paper";
import MyFeed from "./MyFeed";
import FavoritedFeed from "./FavoritedFeed";
import cx from "classnames";
interface ToolBarProps {
  userName: string;
}
const ToolBar: React.FC<ToolBarProps> = ({ userName }) => {
  const classes = useStyles();
  const [styleFlage,setStyleFlage]=useState(1)
  const [data, setData] = useState(<MyFeed userName={userName} />);
  useEffect(() => {
    setStyleFlage(1)
    setData(<MyFeed userName={userName} />);
  }, [userName]);
  const yourFeedhandelclick = () => {
    setStyleFlage(1)
    setData(<MyFeed userName={userName} />);
  };
  const globalFeedhandelclick = () => {
    setStyleFlage(2)
    setData(<FavoritedFeed userName={userName} />);
  };
  return (
    <div className={classes.div}>
      <Paper className={classes.paper}>
        <Toolbar className={classes.toolBar}>
          <Typography
            variant="body2"
            className={cx(classes.disabledTitle, {
              [classes.title]: styleFlage==1
            })}
            onClick={yourFeedhandelclick}
          >
            My Articles
          </Typography>
          <Typography
            variant="body2"
            className={cx(classes.disabledTitle, {
              [classes.title]: styleFlage==2
            })}
            onClick={globalFeedhandelclick}
          >
            Favorited Articles
          </Typography>
        </Toolbar>
        <div className={classes.content}>{data}</div>
      </Paper>
    </div>
  );
};
export default ToolBar;
