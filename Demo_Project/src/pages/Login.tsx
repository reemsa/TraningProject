import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom"
import { setCurrentUser ,getUserInfo} from "../network/userUtilte";
import { axiosPost } from "../network/AXIOS";
import LoginForm from "../Component/LoginForm/LoginForm";
import { connect } from 'react-redux'
import { logInAction, logInActionRequset } from "../actions/LogInAction"
import { AppState } from "../store/Store";
interface IUser{
  userName: string;
  userImage: string;
  userBio: string;
  userEmail: string;
  flag:boolean;
}
interface IBody
{
     user: {
        email: string,
        password: string,
        username?:string
    }
}
interface ConnectedLoginProps
{
  acttion1: any,
  acttion2: any,
  flag: boolean,
  Message: string,
}
const Login: React.FC<ConnectedLoginProps> = ({acttion1,acttion2,flag,Message}) => {
  const [anchorEl, setAnchorEl] = React.useState();
  const [formErrors, setFormErrors] = useState("");
  const [flage, setFlage] = useState(false);
  const open = Boolean(anchorEl);
  useEffect(() =>
  {
    setFormErrors(Message);
  },[flag])
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
    else
    {
      acttion2("users/login", body)
      //this will replace by redux saga
      // axiosPost("users/login", body)
      //   .then(res => {
      //     setCurrentUser(res.data.user);
      //     acttion1(getUserInfo());
      //    window.location.href = "/";
      //   })
      //   .catch(error => {
      //     setFormErrors("email or password are invalid");
      //   })
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
    acttion1: (user: IUser) => dispatch(logInAction(user)),
    acttion2:(endPoint:string,body:IBody)=>dispatch(logInActionRequset(endPoint,body))
  }
}
const mapStateToProps = (state: AppState
) =>
({
  flag: state.ErrorReducer.IsError,
  Message: state.ErrorReducer.ErrorMsg,
  user: {
    userName: state.logInReducer.userName,
    userBio: state.logInReducer.userBio,
    userEmail: state.logInReducer.userEmail,
    userImage: state.logInReducer.userImage,
    flag:state.logInReducer.flag
  }
})
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login)
