import React, { useEffect, useState }  from 'react';
import ProfileBanner from '../Banner/ProfileBanner'
import ProfileToolBar from '../ToolBar/ProfileToolBar';
interface IProps{
    image:string,
    userName:string,
    bio:string,
    following?:boolean
}
const Profile:React.FC<IProps> = ({userName,image,bio,following})=>{
    const [followingFlage,setFollowingFlage]=useState(following)
    useEffect(()=>{
        setFollowingFlage(following)
    },[following])
    return (
        <div>
           <ProfileBanner image={image} userName={userName} bio={bio} following={followingFlage}></ProfileBanner>
           <ProfileToolBar userName={userName}></ProfileToolBar>
        </div>
    )
}
export default Profile;