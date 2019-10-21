import React, { useState } from "react";
import {Redirect, RouteComponentProps } from "react-router-dom"
import { setCurrentUser } from "../network/userUtilte";
import { axiosPost } from "../network/AXIOS";
import LoginForm from "../Component/LoginForm/LoginForm";
const Login: React.FC<RouteComponentProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState();
  const [formErrors, setFormErrors] = useState("");
  const [flage, setFlage] = useState(false);
  const open = Boolean(anchorEl);
  const checkValidation=(email:string)=>{
    if (!email.includes("@")) {
      return false
    }
    return true
  }
  const handelLogin = (email:string,password:string) => {
    const body = {
      user: {
        email: email,
        password: password
      }
    };
    if (!checkValidation(email)) {
      setAnchorEl("ghh");
    }
    else {
      axiosPost("users/login", body)
        .then(res => {
          setCurrentUser(res.data.user);
            window.location.href = "/";
        })
        .catch(error => {
          setFormErrors("email or password are invalid");
        })
    }
    };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  if (!flage) {
    return <LoginForm handelLogin={handelLogin} handleClosePopover={handleClosePopover} open={open} formErrors={formErrors} anchorEl={anchorEl}></LoginForm>
  } else {
    return <Redirect to="/" />;
  }
};
export default Login;
