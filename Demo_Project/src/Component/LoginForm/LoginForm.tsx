import React, { useState } from "react";
import { Link, Redirect, RouteComponentProps } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ToolTip from "../ToolTip/ToolTip";
import useStyles from "./LoginFormStyle";
import  Typography  from "@material-ui/core/Typography";
interface LoginFormProps{
    handelLogin:(email:string,password:string)=>void,
    formErrors:string,
    open:boolean,
    anchorEl:Element,
    handleClosePopover:()=>void
}
const LoginForm: React.FC<LoginFormProps> = ({handelLogin,formErrors,open,anchorEl,handleClosePopover}) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const id = open ? "simple-popover" : undefined;

    return (
      <div className={classes.root}>
        <div className={classes.title}>Sign in</div>
        <ToolTip
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          email={email}/>
          <Link className={classes.subTitle} to="/register">
            Need an acount?
          </Link>
          <Typography>{formErrors}</Typography>
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
          <Button className={classes.signIn} onClick={()=>handelLogin(email,password)}>
            sign in
          </Button>
      </div>
    );
};
export default LoginForm;
