import React, { useEffect, useState } from "react";
import ProfileBanner from "../Banner/ProfileBanner";
import ProfileToolBar from "../ToolBar/ProfileToolBar";
interface ProfileProps {
  image: string;
  userName: string;
  bio: string;
  following?: boolean;
}
const Profile: React.FC<ProfileProps> = (props) => {
  const [followingFlage, setFollowingFlage] = useState(props.following);
  const [userName, setUserName] = useState(props.userName);
  const [image, setImage] = useState(props.image);
  const [bio, setBio] = useState(props.bio);
  useEffect(() => {
    setFollowingFlage(props.following);
    setUserName(props.userName)
    setBio(props.bio);
    setImage(props.image)
  }, [props]);
  return (
    <div>
      <ProfileBanner
        image={image}
        userName={userName}
        bio={bio}
        following={followingFlage}
      ></ProfileBanner>
      <ProfileToolBar userName={userName}></ProfileToolBar>
    </div>
  );
};
export default Profile;
