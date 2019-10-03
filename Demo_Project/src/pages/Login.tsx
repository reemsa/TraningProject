import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import axios from "axios";
import USER from '../GlobalData/user';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  appBar: {
    backgroundColor: "#ffffff",
    maxWidth: "100^%",
    boxShadow: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  abeld: {
    color: "0d0d0d"
  },
  disabeld: {
    color: "#b2aaaa"
  },
  title: {
    flexGrow: 1,
    fontFamily: "Titillium Web",
    fontSize: 50
  },
  subTitle: {
    color: "#5CB85C"
  },
  textField: {
    width: "400px"
  },
  submitButton: {
    backgroundColor: "#5CB85C",
    color: "white",
    width: "100px",
    height: "50px"
  },
  error: {
    color: "red"
  },
  typography: {
    padding: theme.spacing(2)
  }
}));
function Login() {
  const userobj= new USER()
  const classes = useStyles();
  const [user,setUser]=useState({})
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMas, setErrorMas] = useState("");
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handelLogin = (event: any) => {
    const body = {
      user: {
        email: email,
        password: password
      }
    };
    console.log("email=" + email);
    console.log("password=" + password);
    axios
      .post(`https://conduit.productionready.io/api/users/login`, body)
      .then(res => {
        setUser(res.data.user)
        console.log("res=" + res);
        console.log(res.data.user);
        userobj.setUSER(res.data.user);
        window.location.href = "/";
      });
    if (!email.includes("@")) {
      setAnchorEl(event.currentTarget);
      console.log("sdah");
    } else {
      setErrorMas("email or password are invalid");
    }
  };
  const handleClose = () => {
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
      <div className={classes.error}>{errorMas}</div>
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.typography}>
          {" "}
          <ErrorOutlineIcon /> please include an @ in the email. {email} is
          missing @{" "}
        </Typography>
      </Popover>
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
        <Button className={classes.submitButton} onClick={handelLogin}>
          sing in
        </Button>
      </div>
    </div>
  );
}
export default Login;
