import React,{ useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./ProfileBannerStyles";
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from "reactstrap";
import { axiosPostWithAuthentication ,axiosDeleteWithAuthentication} from "../../network/AXIOS";
import { getUser } from "../../network/user";
interface IProps{
  image:string,
  userName:string,
  bio:string,
  following?:boolean
}
const ProfileBanner:React.FC<IProps> = ({userName,image,bio,following}) => {
  const classes = useStyles();
  const [followingFlage,setFollowingFlage]=useState(following)
  useEffect(()=>{
    setFollowingFlage(following);
  },[following])
  if (image==null||image==""){
      image="https://static.productionready.io/images/smiley-cyrus.jpg"
  }
  const handelEdit=()=>{
    window.location.href = "/settings";
  }
  const handelFollow=()=>{
    if(getUser()==undefined||getUser()=="null"||getUser()==null){
      window.location.href = "/register";
    }
    else{
      axiosPostWithAuthentication(`profiles/${userName}/follow`,{}).then(res=>{
        setFollowingFlage(res.data.profile.following)
      })
    }
  }
  const handelUnFollow=()=>{
    if(getUser()==undefined||getUser()=="null"||getUser()==null){
      window.location.href = "/register";
    }
    else{
      axiosDeleteWithAuthentication(`profiles/${userName}/follow`).then(res=>{
        setFollowingFlage(res.data.profile.following)
      })
    }
}
  return (
    <Container fixed style={{ height: "200px" }}>
      <div className={classes.banner}>
        <div className={classes.container}>
          <br />
          <Typography className={classes.logo_font} variant="h3" gutterBottom>
              <div className={classes.div}>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
              </div>
          </Typography>
          <Typography className={classes.para} variant="h6" gutterBottom>
             {userName.toLowerCase()}
          </Typography>
          <br />
          <Typography className={classes.bio} variant="body2" gutterBottom>
             {bio}
          </Typography>
          <br />
          <Typography className={classes.button} variant="body2" gutterBottom><Button className={classes.editButton} onClick={followingFlage==undefined?handelEdit:followingFlage?handelUnFollow:handelFollow}>{followingFlage==undefined?<SettingsIcon className={classes.sttingIcon}/>:<AddIcon />}{followingFlage==undefined?"Edit Profile Settings":followingFlage?`Unfollow ${userName}`:`Follow ${userName}` }</Button>
            
          </Typography>
        </div>
      </div>
    </Container> 
  );
};


export default ProfileBanner;
