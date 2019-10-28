import React, { useState } from "react";
import { axiosPost } from "../network/AXIOS";
import { setCurrentUser, getUserInfo } from "../network/userUtilte";
import RegisterForm from "../Component/RegisterForm/RegisterForm";
import { logInAction } from "../actions/LogInAction";
import { connect } from "react-redux";

interface RegistrationFormErrors {
  username?: string; 
  email?: string; 
  password?: string; 
}
interface IUser{
  userName: string;
  userImage: string;
  userBio: string;
  userEmail: string;
  flag:boolean;
}
interface ConnectedSignUpProps
{
  acttion1: any
}
const Register:React.FC<ConnectedSignUpProps>=({acttion1}) =>{
  const [formErrors, setFormErrors] = useState<RegistrationFormErrors>({});
  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const checkValidation=(email:string)=>{
    if (!email.includes("@")) {
      return false
    }
    return true
  }
  const handelSignup = (email:string,username:string,password:string) => {
    if (!checkValidation(email)) {
      setAnchorEl("ghh");
    }
    const body = {
      user: {
        username: username,
        email: email,
        password: password as string
      }
    };
    //this will replace by redux saga
    axiosPost("users", body)
      .then(res => {
        setCurrentUser(res.data.user);
        acttion1(getUserInfo());
        window.location.href = "/";
      })
      .catch(res => {
        setFormErrors(res.response.data.errors);
      });
  };
  return(
    <RegisterForm handelSignup={handelSignup} handleClosePopover={handleClosePopover} open={open} anchorEl={anchorEl} formErrors={formErrors}></RegisterForm>
  )
}
const mapActionsToProps = (dispatch:any) =>
{
  return {
    acttion1: (user:IUser) => dispatch(logInAction(user))
  }
}
export default connect(
  null,
  mapActionsToProps
)(Register)
