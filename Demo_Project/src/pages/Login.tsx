import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ToolTip from "../Component/ToolTip/ToolTip";
import {setCurrentUser} from '../network/user'
import useStyles from './LoginStyle'
import {axiosPost} from '../network/AXIOS'
const Login:React.FC=()=>{
  const classes = useStyles();
  const [user,setUser]=useState({})
  const [anchorEl, setAnchorEl] = React.useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  setCurrentUser(null)
  const handelLogin = (event:React.MouseEvent<HTMLElement>) => {
    const body = {
      user: {
        email: email,
        password: password
      }
    };
    if (!email.includes("@")) {
      setAnchorEl(event.currentTarget);
    } else {
      axiosPost('users/login',body)
      .then(res => {
        setUser(res.data.user)
        setCurrentUser(res.data.user)
        window.location.href = "/";
      })
      .catch(function (error) {
        setErrorMessage("email or password are invalid");
      });
    }
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <div className={classes.title}>Sing in</div>
      <div>
        <Link className={classes.subTitle} to="/register">
          Need an acount?
        </Link>
      </div>
      <div className={classes.error}>{errorMessage}</div>
      <div>
        <TextField
          className={classes.textField}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <ToolTip id={id} open={open} anchorEl={anchorEl}onClose={handleClosePopover} email={email}></ToolTip>
      <div>
        <TextField
          className={classes.textField}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <Button className={classes.signIn} onClick={handelLogin}>
          sign in
        </Button>
      </div>
    </div>
  );
}
export default Login;
