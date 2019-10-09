import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {axiosPost} from '../network/AXIOS';
import {setCurrentUser} from '../network/user'
import useStyles from './RegisterStyle'
import ToolTip from "../Component/ToolTip/ToolTip";
function Register() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const open = Boolean(anchorEl);
  const [errorMessage, setErrorMessage] = useState("");
  const id = open ? "simple-popover" : undefined;
  const handelSignup = (event: React.MouseEvent<HTMLElement>) => {
    if (!email.includes("@")) {
      setAnchorEl(event.currentTarget);
    }
    const body = {
      user: {
        username: username,
        email: email,
        password: password as string
      }
    };
    axiosPost("users",body).then(res => {
      setCurrentUser(res.data.user)
        window.location.href = "/";
      }).catch(function (error) {
        setErrorMessage("email has already been taken ");
      })
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <div className={classes.title}>Sing up</div>
      <div>
        <Link className={classes.subTitle} to="/login">
          Have an acount?
        </Link>
      </div>
      <div className={classes.error}>{errorMessage}</div>
      <div>
        <TextField
          className={classes.textField}
          id="standard-name"
          label="Username"
          type="username"
          name="username"
          autoComplete="username"
          margin="normal"
          variant="outlined"
          value={username}
          onChange={event => {
            setUsername(event.target.value);
          }}
        />
      </div>
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
        <Button className={classes.signUp} onClick={handelSignup}>
          sign up
        </Button>
      </div>
    </div>
  );
}
export default Register;
