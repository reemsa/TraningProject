import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import { RouteChildrenProps } from "react-router";
import axios from "axios";
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
function Register() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handelsignup = (event: any) => {
    if (!email.includes("@")) {
      setAnchorEl(event.currentTarget);
      console.log("sdah");
    }
    const body = {
      user: {
        username: username,
        email: email,
        password: password
      }
    };
    console.log("name=" + username);
    console.log("email=" + email);
    console.log("password=" + password);
    axios
      .post(`https://conduit.productionready.io/api/users`, body)
      .then(res => {
        console.log("res=" + res);
        console.log(res.data);
      });
    //callbackFromParent({flage:false,userName:"reem"});
  };
  const handleClose = () => {
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
        <Button className={classes.submitButton} onClick={handelsignup}>
          sing up
        </Button>
      </div>
    </div>
  );
}
export default Register;
