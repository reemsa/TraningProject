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
  const user=localStorage.getItem("user");
  let userName=""
  let image="https://static.productionready.io/images/smiley-cyrus.jpg"
  if(user!="null"&&user!=null){
    userName=JSON.parse(localStorage.getItem("user") as string).username;
    if(JSON.parse(localStorage.getItem("user") as string).image!=null){
    image=JSON.parse(localStorage.getItem("user") as string).image;
    }
  }
  const ids=['home','signIn','signUp','newArticle','settings','photo']
  const handler=(event:any)=>{
    let id = event.target.id;
    let element = document.getElementById(id);
    console.log("id="+id)
    for(let i=0;i<ids.length;i++){
      console.log("ids[i]="+ids[i])
        if(ids[i]==id){
          console.log("equal")
          if(element!=null){
            element.className=classes.abled
          }
        }
        else{
          let el = document.getElementById(ids[i]);
          console.log("not equal")
          if(el!=null){
            el.className=classes.link
          }
      }
  }
}
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
            <Link onClick={handler}  id={"home"} className={classes.link} to="/">
                Home
            </Link>
            <Link onClick={handler} id={'signIn'} className={classes.link} to="/login">
                Sing in
            </Link>
            <Link onClick={handler}  id={'signUp'} className={classes.link} to="/register">
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
            <Link onClick={handler}  id={"home"} className={classes.link} to="/">
              Home
            </Link>
            <Link onClick={handler}  id={"newArticle"} className={classes.link} to="/article">
                <IoIosCreate className={classes.createIcon}/>New Article
            </Link>
            <Link onClick={handler}  id={"settings"} className={classes.link} to="/settings">
                <IoIosSettings className={classes.createIcon}/> Settings
            </Link>
            <Link onClick={handler}  id={"photo"} className={classes.link} to="/profile">
              <Button>
                <CardMedia
                      className={classes.media}
                      image={image}
                />
                {userName}
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
