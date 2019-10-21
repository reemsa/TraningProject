import { withStyles, WithStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import cx from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./ToolBarStyles";

interface ToolbarProps {
  tagName: string;
  logedInFlag:boolean,
  data:JSX.Element,
  styleFlage:number,
  handleYourFeed:()=>void,
  handelGlobalFeed:()=>void,
  handelTagFeed:()=>void,
}

const MyToolbar: React.FC<ToolbarProps & WithStyles<typeof styles>> = ({ tagName, logedInFlag,data,styleFlage,handleYourFeed,handelGlobalFeed,handelTagFeed,classes }) => {
  useEffect(() => {
  }, [tagName]);
  return (
    <div>
      <div>
        <Toolbar className={classes.toolBar}>
          {!logedInFlag ? null : (
            <Typography
              variant="body2"
              className={cx(classes.disabledTitle, {
                [classes.title]: styleFlage==1
              })}
              onClick={handleYourFeed}
            >
              Your feed
            </Typography>
          )}

          <Typography
            variant="body2"
            className={cx(classes.disabledTitle, {
              [classes.title]: styleFlage===2
            })}
            onClick={handelGlobalFeed}
          >
            Global feed
          </Typography>
          {tagName == "" || tagName == null ? null : (
            <Typography
              variant="body2"
              className={cx(classes.disabledTitle, {
                [classes.title]: styleFlage===3
              })}
              onClick={handelTagFeed}
            >
              #{tagName}
            </Typography>
          )}
        </Toolbar>
      </div>
      <div className={classes.content}>{data}</div>
    </div>
  );
};

const styler = withStyles(styles);
export default styler(MyToolbar);
