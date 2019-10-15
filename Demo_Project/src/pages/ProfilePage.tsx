import React from 'react';
import {getUser} from '../network/user'
import Profile from '../Component/Profile/Profile';
const ProfilePage:React.FC=()=>{
  let user=getUser()
  let userName=JSON.parse(user as string).username;
  let image=JSON.parse(user as string).image;
  let bio=JSON.parse(user as string).bio;
    return <Profile image={image} userName={userName} bio={bio}></Profile>
}
export default ProfilePage;