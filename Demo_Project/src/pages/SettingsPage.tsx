import React, { useEffect, useState } from "react";
import Settings from "../Component/settings/Settings";
import { getUserImage ,getUserName,getUserBio,getUserEmail, setCurrentUser,userLogOut} from "../network/userUtilte";
import { axiosPutWithAuthentication } from "../network/AXIOS";
import { Redirect } from "react-router-dom";
const SettingsPage = () => {
  const [userName,setUserName]=useState(getUserName())
  const [userImage,setUserImage]=useState(getUserImage())
  const [userBio,setUserBio]=useState(getUserBio())
  const [userEmail,setUserEmail]=useState(getUserEmail())
  const [flage,setFlage]=useState(false)
  const [errorMessage,setErrorMessage]=useState("")
  const handelUpdate = (password:string,name:string,email:string,bio:string,image:string) => {
    let body = {
      user: {
        email: email || undefined,
        bio: bio || undefined,
        image: image || undefined,
        username: name || undefined,
        password: password || undefined
      }
    };
    axiosPutWithAuthentication("user", body)
    .then(res => {
      setUserName(res.data.user.username);
      setUserImage(res.data.user.image);
      setUserEmail(res.data.user.email);
      setUserBio(res.data.user.bio);
      setCurrentUser(res.data.user)
      setFlage(true)
    })
    .catch(error=>{
      console.log(error.response.data.errors)
      setErrorMessage(error.response.data.errors)

    });
  };
  const handelClose = () => {
    userLogOut()
    window.location.href = "/";
  };
  if(flage){
    return <Redirect to= "/profile"/>
  }
  return (
       <Settings imageURL={userImage} userName={userName} bio={userBio} email={userEmail} handelUpdate={handelUpdate} handelClose={handelClose} errorMessage={errorMessage}></Settings>
  );
};
export default SettingsPage;
