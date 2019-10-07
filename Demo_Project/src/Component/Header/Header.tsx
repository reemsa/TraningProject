import React, { useState, MouseEventHandler } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "./HeaderStyles";
import {IoIosCreate,IoIosSettings} from 'react-icons/io';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from "@material-ui/core";
const Header:React.FC=()=>{
  const [style,setStyle]=useState("home")
  const user=localStorage.getItem("user");
  let userName=""
  let image="https://static.productionready.io/images/smiley-cyrus.jpg"
  if(user!="null"&&user!=null){
    userName=JSON.parse(localStorage.getItem("user") as string).username;
    if(JSON.parse(localStorage.getItem("user") as string).image!=null){
    image=JSON.parse(localStorage.getItem("user") as string).image;
    }
  }
  const handler=(event:any)=>setStyle(event.target.id);
  const classes = useStyles();
  //loged in succsecfully
  if (user=="null") {
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              <Link className={classes.title} to="/">
                conduit
              </Link>
            </Typography>
            <Link onClick={handler} id={"home"} className={style=='home'? classes.enabled:classes.link} to="/">
                Home
            </Link>
            <Link onClick={handler} id={'signIn'} className={style=='signIn'? classes.enabled:classes.link} to="/login">
                Sing in
            </Link>
            <Link onClick={handler}  id={'signUp'} className={style=='signUp'? classes.enabled:classes.link} to="/register">
                Sing up
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  //wihout log in
  else {
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              <Link  className={classes.title} to="/">conduit
              </Link>
            </Typography>
            <Link onClick={handler}  id={"home"}  className={style=='home'? classes.enabled:classes.link} to="/">
              Home
            </Link>
            <Link onClick={handler}  id={"newArticle"} className={style=='newArticle'? classes.enabled:classes.link} to="/article">
                <IoIosCreate className={classes.createIcon}/>New Article
            </Link>
            <Link onClick={handler}  id={"settings"}  className={style=='settings'? classes.enabled:classes.link} to="/settings">
                <IoIosSettings className={classes.createIcon}/> Settings
            </Link>
            <Link onClick={handler}  id={"profile"} className={style=="profile"? classes.enabled:classes.link} to="/profile">
              <Button onClick={handler}  id={"profile"} className={style=="profile"? classes.enabledButton:classes.button}>
                <CardMedia
                      className={classes.media}
                      image={image}
                />
                {userName }
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
