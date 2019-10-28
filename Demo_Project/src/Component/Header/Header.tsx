import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "./HeaderStyles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid  from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from '@material-ui/icons/Settings';
import LaunchIcon from '@material-ui/icons/Launch';
import { connect } from "react-redux";
import { AppState } from "../../store/Store";
interface IUser{
  userName: string;
  userImage: string;
  userBio: string;
  userEmail: string;
  flag:boolean;
}
interface ConnectedHeaderProps
{
  user: IUser;
}
const Header: React.FC<ConnectedHeaderProps>= ({user}) => {
  const [style, setStyle] = useState("home");
  const [userName, setUserName] = useState(user.userName);
  const [image, setImage] = useState(user.userImage);
  useEffect(() =>
  {
    if (user.flag) {
      setUserName(user.userName);
      if (user.userImage == "") {
        setImage("https://static.productionready.io/images/smiley-cyrus.jpg");
      }
      else
      {
        setImage(user.userImage);
      }
    }
  }, [user]);
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
              {user.flag?
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
                {user.flag?
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
                {user.flag?
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
const mapStateToProps = (state: AppState) => ({ 
  user: {
    userName: state.logInReducer.userName,
    userBio: state.logInReducer.userBio,
    userEmail: state.logInReducer.userEmail,
    userImage: state.logInReducer.userImage,
    flag:state.logInReducer.flag
  }
})

export default connect(mapStateToProps)(Header)