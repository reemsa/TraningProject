import React from 'react';
import ProfileBanner from '../Banner/ProfileBanner'
import ProfileToolBar from '../ToolBar/ProfileToolBar';
interface IProps{
    image:string,
    userName:string,
    bio:string,
    following?:boolean
}
const Profile:React.FC<IProps> = ({userName,image,bio,following})=>{
    return (
        <div>
           <ProfileBanner image={image} userName={userName} bio={bio} following={following}></ProfileBanner>
           <ProfileToolBar userName={userName}></ProfileToolBar>
        </div>
    )
}
export default Profile;