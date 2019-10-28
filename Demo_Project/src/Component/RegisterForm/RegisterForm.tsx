import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./RegisterFormStyle";
import ToolTip from "../ToolTip/ToolTip";
import { Typography } from "@material-ui/core";

interface RegistrationFormErrors {
  username?: string; 
  email?: string; 
  password?: string; 
}
interface RegisterFormProps{
    handelSignup:(email:string,username:string,password:string)=>void,
    formErrors:RegistrationFormErrors,
    open:boolean,
    anchorEl:Element,
    handleClosePopover:()=>void
}

const RegisterForm:React.FC<RegisterFormProps>=({handelSignup,formErrors,open,anchorEl,handleClosePopover}) =>{
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const id = open ? "simple-popover" : undefined;

  const handleUserNameText = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsername(event.target.value)
  };
  const handleEmailText = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(event.target.value)
  };
  const handlePasswordText = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value)
  };

  return (
    <div className={classes.root}>
      <ToolTip
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={()=>handleClosePopover()}
        email={email}
      />
      <div className={classes.title}>Sign up</div>
      <Link className={classes.subTitle} to="/login">Have an acount?</Link>
      {formErrors.email && <Typography>{"email " + formErrors.email}</Typography>}
      {formErrors.username && <Typography>{"name " + formErrors.username}</Typography>}
      {formErrors.password && <Typography>{"password " + formErrors.password}</Typography>}
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
        onChange={handleUserNameText}
      />
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
        onChange={handleEmailText}
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
        onChange={handlePasswordText}
      />
      <Button className={classes.signUp} onClick={()=>handelSignup(email,username,password)}>
        sign up
      </Button>
    </div>
  );
}
export default RegisterForm;
