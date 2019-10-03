import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import useStyles from "./HeaderStyles";
import USER from '../../GlobalData/user'
function Header({
  loginFlage,
  userName
}: {
  loginFlage: boolean;
  userName?: string;
}) {
  const flage = loginFlage;
  const userobj=new USER();
  const user=userobj.getUSER();
  console.log(user)
  const classes = useStyles();
  const [Homestyle, setHomestyle] = useState(classes.abeld);
  const [Singinstyle, setSinginstyle] = useState(classes.disabeld);
  const [Singupstyle, setSingupstyle] = useState(classes.disabeld);
  const [RegisterStyle,setRegisterStyle]=useState(classes.disabeld)
  const Homehandelclick = (event: any) => {
    setHomestyle(classes.abeld);
    setSinginstyle(classes.disabeld);
    setSingupstyle(classes.disabeld);
    setRegisterStyle(classes.disabeld);
  };
  const Singinhandelclick = (event: any) => {
    setHomestyle(classes.disabeld);
    setSinginstyle(classes.abeld);
    setSingupstyle(classes.disabeld);
    setRegisterStyle(classes.disabeld);
  };

  const Singuphandelclick = (event: any) => {
    setHomestyle(classes.disabeld);
    setSinginstyle(classes.disabeld);
    setSingupstyle(classes.abeld);
    setRegisterStyle(classes.disabeld);
  };
  const Registerhandlerclick=()=>{
    setHomestyle(classes.disabeld);
    setSinginstyle(classes.disabeld);
    setSingupstyle(classes.disabeld);
    setRegisterStyle(classes.abeld);
  }
  //loged in succsecfully
  if (!user) {
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              <Link style={{ textDecoration: "none" }} to="/">
                <Button className={classes.title}>conduit</Button>
              </Link>
            </Typography>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button className={Homestyle} onClick={Homehandelclick}>
                Home
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button className={Singinstyle} onClick={Singinhandelclick}>
                Sing in
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button className={Singupstyle} onClick={Singuphandelclick}>
                Sing up
              </Button>
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
              <Link style={{ textDecoration: "none" }} to="/">
                <Button className={classes.title}>conduit</Button>
              </Link>
            </Typography>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button className={Homestyle} onClick={Homehandelclick}>
                Home
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/article">
              <Button className={Singinstyle} onClick={Singinhandelclick}>
                New Article
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/settings">
              <Button className={Singupstyle} onClick={Singuphandelclick}>
                Settings
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button className={RegisterStyle} onClick={Registerhandlerclick}>
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
