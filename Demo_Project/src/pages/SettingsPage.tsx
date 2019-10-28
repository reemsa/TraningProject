import React, { useState } from "react";
import Settings from "../Component/settings/Settings";
import { setCurrentUser,userLogOut, getUserInfo} from "../network/userUtilte";
import { axiosPutWithAuthentication } from "../network/AXIOS";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../store/Store";
import { logInAction } from "../actions/LogInAction";
interface ConnectedSettingsProps
{
    user: {
    userName: string,
    userBio: string,
    userEmail: string,
    userImage: string,
    flag:boolean
  },
  acttion1: any
  
}
interface IUser{
  userName: string;
  userImage: string;
  userBio: string;
  userEmail: string;
  flag:boolean;
}
const SettingsPage:React.FC<ConnectedSettingsProps>= ({user,acttion1}) => {
  const [flage,setFlage]=useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const handelUpdate = (password:string,name:string,email:string,bio:string,image:string) => {
    const body = {
      user: {
        email: email || undefined,
        bio: bio || undefined,
        image: image || undefined,
        username: name || undefined,
        password: password || undefined
      }
    };
    axiosPutWithAuthentication("user", body)
      .then(res =>
      {
        setCurrentUser(res.data.user)
        acttion1(getUserInfo())
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
  if (flage)
  {
     return <Redirect to= "/profile"/>
  }
  return (
       <Settings handelUpdate={handelUpdate} handelClose={handelClose} errorMessage={errorMessage}></Settings>
  );
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
const mapActionsToProps = (dispatch:any) =>
{
  return {
    acttion1: (user:IUser) => dispatch(logInAction(user))
  }
}
export default connect(mapStateToProps,mapActionsToProps)(SettingsPage)
