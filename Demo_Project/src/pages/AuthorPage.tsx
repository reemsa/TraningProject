import React,{ useState, useEffect } from 'react';
import Profile from '../Component/Profile/Profile'
import { RouteComponentProps } from 'react-router-dom';
import {axiosGetWithAuthentication, axiosGet} from '../network/AXIOS'
import { getUser } from '../network/user';
interface IProfile{
    username:string,
    bio:string,
    following:boolean,
    image:string
}
const AuthorPage:React.FC<RouteComponentProps <{user: string}>>=props=>{
    const user=props.match.params.user
    const temp:IProfile={username:user,bio:"",image:"",following:false}
    const [userInfo,setUserInfo]=useState(temp)
    useEffect(()=>{
        if(getUser()==undefined||getUser()=="null"){
            axiosGet(`profiles/${user}`).then(res=>{
                setUserInfo(res.data.profile)
            })
        }
        else{
            axiosGetWithAuthentication(`profiles/${user}`).then(res=>{
                setUserInfo(res.data.profile)
            })
        }
    },[user])

    if(userInfo==undefined){
       setUserInfo({username:"",bio:"",image:"",following:false})
    }
    return <Profile userName={userInfo.username} bio={userInfo.bio} image={userInfo.image} following={userInfo.following}></Profile>
}
export default AuthorPage