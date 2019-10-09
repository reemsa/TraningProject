import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./ProfileBannerStyles";
import {IoIosSettings} from 'react-icons/io';
import AddIcon from '@material-ui/icons/Add';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from "reactstrap";
interface IProps{
  image:string,
  userName:string,
  bio:string,
  following?:boolean
}
const ProfileBanner:React.FC<IProps> = ({userName,image,bio,following}) => {
  const classes = useStyles();
  if (image==null||image==""){
      image="https://static.productionready.io/images/smiley-cyrus.jpg"
  }
  const handelEdit=()=>{
    window.location.href = "/settings";
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
          <Typography className={classes.button} variant="body2" gutterBottom>
            <Button className={classes.editButton} onClick={handelEdit}>{following==undefined?<IoIosSettings className={classes.sttingIcon}/>:<AddIcon className={classes.sttingIcon}/>}{following==undefined?"Edit Profile Settings":following?`unfollow ${userName}`:`follow ${userName}` }</Button>
          </Typography>
        </div>
      </div>
    </Container> 
  );
};

export default ProfileBanner;
