import React, { useState } from "react";
import {Redirect} from "react-router-dom"
import { setCurrentUser ,getUserInfo} from "../network/userUtilte";
import { axiosPost } from "../network/AXIOS";
import LoginForm from "../Component/LoginForm/LoginForm";
import { connect } from 'react-redux'
import { logInAction } from "../actions/LogInAction"
interface IUser{
  userName: string;
  userImage: string;
  userBio: string;
  userEmail: string;
  flag:boolean;
}
interface ConnectedLoginProps
{
  acttion1: any
}
const Login: React.FC<ConnectedLoginProps> = ({acttion1}) => {
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
  const handelLogin = (email: string, password: string) =>
  {
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
          acttion1(getUserInfo());
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
    return <LoginForm handelLogin={handelLogin} handleClosePopover={handleClosePopover} open={open} formErrors={formErrors} anchorEl={anchorEl}/>
  } else {
    return <Redirect to="/" />;
  }
};
const mapActionsToProps = (dispatch:any) =>
{
  return {
    acttion1: (user:IUser) => dispatch(logInAction(user))
  }
}
export default connect(
  null,
  mapActionsToProps
)(Login)
