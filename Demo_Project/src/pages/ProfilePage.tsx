import React, { useState, useEffect } from "react";
import {isUserLoggedIn,getUserName,getUserImage,getUserBio } from "../network/userUtilte";
import Profile from "../Component/Profile/Profile";
const ProfilePage: React.FC = () => {
  const [userName,setUserName]=useState(getUserName())
  const [userImage,setUserImage]=useState(getUserImage())
  const [userBio,setUserBio]=useState(getUserBio())
  useEffect(()=>{
    setUserBio(getUserBio())
    setUserImage(getUserImage())
    setUserName(getUserName())
  },[userName,userImage,userBio])
  if(!isUserLoggedIn()){
    window.location.href="/"
  }
  else{
    return <Profile image={userImage} userName={userName} bio={userBio}></Profile>;
  }
  return null
};
export default ProfilePage;
