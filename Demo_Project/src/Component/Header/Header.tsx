import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "./HeaderStyles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid  from "@material-ui/core/Grid";
import {isUserLoggedIn,getUserName ,getUserImage } from "../../network/userUtilte";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from '@material-ui/icons/Settings';
import LaunchIcon from '@material-ui/icons/Launch';
const Header: React.FC = () => {
  const [style, setStyle] = useState("home");
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState(
    "https://static.productionready.io/images/smiley-cyrus.jpg"
  );
  useEffect(() => {
    console.log(style)
    if (isUserLoggedIn()) {
      setUserName(getUserName());
      if ( getUserImage()!= null) {
        setImage(getUserImage());
      }
    }
    if (image == "") {
      setImage("https://static.productionready.io/images/smiley-cyrus.jpg");
    }
  }, [style]);
  const homeHandler = (event: any) => {
    setStyle("home");
  }
  const newArticleHandler = (event: any) => {
    setStyle("newArticle");
  }
  const settingsHandler = (event: any) => {
    setStyle("settings");
  }
  const profileHandler = (event: any) => {
    setStyle("profile");
  }
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={1}/>
          <Grid item xs={9}>
          <AppBar className={classes.appBar} position="static">
          <Toolbar>
            
            <Typography variant="h5" className={classes.title}>
              <Link onClick={homeHandler}className={classes.title} to="/">
                conduit
              </Link>
            </Typography>
            <Typography variant="h5" className={classes.tabs}>
              <Link
                onClick={homeHandler}
                id={"home"}
                className={style == "home" ? classes.enabled : classes.link}
                to="/"
              >
                Home
              </Link>
              {isUserLoggedIn()?
                  <Link
                  onClick={newArticleHandler}
                  id={"newArticle"}
                  className={
                    style == "newArticle" ? classes.enabled : classes.link
                  }
                  to={`/editor/${null}`}
                >
                  <IconButton size="small" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <LaunchIcon fontSize="small" color={style == "newArticle" ? "inherit" : "disabled"}/>
                    <Typography  className={style == "newArticle" ? classes.enabled : classes.link} >New Article</Typography>
                   </IconButton>
                </Link>
                :
                <Link
                onClick={newArticleHandler}
                id={"signIn"}
                className={style == "newArticle" ? classes.enabled : classes.link}
                to="/login"
                >
                 Sing in
                </Link>
                }
                {isUserLoggedIn()?
                  <Link
                  onClick={settingsHandler}
                  id={"settings"}
                  className={style == "settings" ? classes.enabled : classes.link}
                  to="/settings"
                  >
                    <IconButton size="small" edge="start"color="inherit" aria-label="menu">
                      <SettingsIcon fontSize="small" color={style == "settings" ? "inherit" : "disabled"}/>
                      <Typography  className={style == "settings" ? classes.enabled : classes.link} >Settings</Typography>
                    </IconButton>                
                  </Link>
                :
                <Link
                onClick={settingsHandler}
                id={"signUp"}
                className={style == "settings" ? classes.enabled : classes.link}
                to="/register"
              >
                Sign up
              </Link>
                }
                {isUserLoggedIn()?
                  <Link
                  onClick={profileHandler}
                  id={"profile"}
                  className={style == "profile" ? classes.enabled : classes.link}
                  to="/profile"
                  >
                  <Button
                    onClick={profileHandler}
                    id={"profile"}
                    className={
                      style == "profile" ? classes.enabledButton : classes.button
                    }
                  >
                    <CardMedia className={classes.media} image={image} />
                    <span className={style=="profile"?classes.userNameOn:classes.userName}>{userName}</span>
                  </Button>
                  </Link>
                  :null}
            </Typography>
          </Toolbar>
        </AppBar>
          </Grid>
          <Grid item xs/>
        </Grid>
      </div>
    );
};

export default Header;
