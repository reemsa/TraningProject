import React, { useState } from "react";
import { axiosPost } from "../network/AXIOS";
import { setCurrentUser } from "../network/userUtilte";
import RegisterForm from "../Component/RegisterForm/RegisterForm";

interface RegistrationFormErrors {
  username?: string; 
  email?: string; 
  password?: string; 
}

const Register:React.FC=() =>{
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
    axiosPost("users", body)
      .then(res => {
        setCurrentUser(res.data.user);
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
export default Register;
