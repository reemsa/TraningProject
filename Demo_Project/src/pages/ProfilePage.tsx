import React, { useState, useEffect } from "react";
import Profile from "../Component/Profile/Profile";
import { connect } from "react-redux";
import { AppState } from "../store/Store";
interface IUser{
  userName: string;
  userImage: string;
  userBio: string;
  userEmail: string;
  flag:boolean;
}
interface ConnectedProfileProps
{
  user: IUser;
}
const ProfilePage: React.FC<ConnectedProfileProps> = ({user}) => {
  const [userName,setUserName]=useState(user.userName)
  const [userImage,setUserImage]=useState(user.userImage)
  const [userBio, setUserBio] = useState(user.userBio)
  const [logedFlage,setLogedFlage]=useState(user.flag)
  useEffect(() =>
  {
    setUserBio(user.userBio)
    setUserImage(user.userImage)
    setUserName(user.userName)
    setLogedFlage(user.flag)
  },[user])
  if(!logedFlage){
    window.location.href="/"
  }
  else{
    return <Profile image={userImage} userName={userName} bio={userBio}></Profile>;
  }
  return null
};
const mapStateToProps = (state: AppState) => ({ 
  user: {
    userName: state.logInReducer.userName,
    userBio: state.logInReducer.userBio,
    userEmail: state.logInReducer.userEmail,
    userImage: state.logInReducer.userImage,
    flag:state.logInReducer.flag
  }
})
export default connect(mapStateToProps)(ProfilePage)
