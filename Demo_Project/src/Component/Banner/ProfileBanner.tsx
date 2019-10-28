import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./ProfileBannerStyles";
import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "reactstrap";
import {
  axiosPostWithAuthentication,
  axiosDeleteWithAuthentication
} from "../../network/AXIOS";
import IconButton from "@material-ui/core/IconButton";
import { AppState } from "../../store/Store";
import { connect } from "react-redux";
interface ProfileBannerProps {
  image: string;
  userName: string;
  bio: string;
  following?: boolean;
}
interface ConnectedProfileBannerProps
{
  flag:boolean
}
const ProfileBanner: React.FC<ProfileBannerProps&ConnectedProfileBannerProps> = ({
  userName,
  image,
  bio,
  following,
  flag
}) => {
  const classes = useStyles();
  const [followingFlage, setFollowingFlage] = useState<boolean|undefined>(following);
  useEffect(() => {
    setFollowingFlage(following);
    if (image == null || image == "") {
      image = "https://static.productionready.io/images/smiley-cyrus.jpg";
    }
  }, [following]);
  const handelEdit = () => {
    window.location.href = "/settings";
  };
  const handelFollow = () => {
    if (!flag) {
      window.location.href = "/register";
    } else {
      axiosPostWithAuthentication(`profiles/${userName}/follow`, {}).then(
        res => {
          setFollowingFlage(res.data.profile.following);
        }
      );
    }
  };
  const handelUnFollow = () => {
    if (!flag) {
      window.location.href = "/register";
    } else {
      axiosDeleteWithAuthentication(`profiles/${userName}/follow`).then(res => {
        setFollowingFlage(res.data.profile.following);
      });
    }
  };
  return (
    <Container fixed className={classes.mainContainer}>
      <div className={classes.banner}>
        <div className={classes.container}>
          <br />
          <Typography className={classes.logo_font} variant="h3" gutterBottom>
            <div className={classes.div}>
              <CardMedia className={classes.media} image={image} />
            </div>
          </Typography>
          <Typography className={classes.para} variant="body2" gutterBottom>
            {userName.toLowerCase()}
          </Typography>
          <Typography className={classes.bio} variant="subtitle2" gutterBottom>
            {bio}
          </Typography>
          <Typography className={classes.button} variant="body2" gutterBottom>
            <Button
              className={classes.editButton}
              onClick={
                followingFlage == undefined
                  ? handelEdit
                  : followingFlage
                  ? handelUnFollow
                  : handelFollow
              }
            >
              {followingFlage == undefined ? (
                   <IconButton size="small" edge="start"color="inherit" aria-label="menu">
                   <SettingsIcon fontSize="small" className={classes.sttingIcon}/>
                   <Typography>Edit Profile Settings</Typography>
                 </IconButton> 
              ) : (
                <IconButton size="small" edge="start"color="inherit" aria-label="menu">
                <AddIcon fontSize="small"/>
                <Typography>{followingFlage
                  ? ` Unfollow ${userName}`
                  : ` Follow ${userName}`}</Typography>
              </IconButton>
              )}
            </Button>
          </Typography>
        </div>
      </div>
    </Container>
  );
};
const mapStateToProps = (state: AppState) => ({
  flag:state.logInReducer.flag
})
export default connect(mapStateToProps)(ProfileBanner)
