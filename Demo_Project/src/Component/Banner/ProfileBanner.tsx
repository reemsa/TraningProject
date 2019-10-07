import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./ProfileBannerStyles";
import {IoIosSettings} from 'react-icons/io';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from "reactstrap";
const ProfileBanner = () => {
  const classes = useStyles();
  let userName=JSON.parse(localStorage.getItem("user") as string).username;
  let image=JSON.parse(localStorage.getItem("user") as string).image;
  if (image==null){
      image="https://static.productionready.io/images/smiley-cyrus.jpg"
  }
  const handelEdit=()=>{
    window.location.href = "settings";
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
          <Typography className={classes.button} variant="h6" gutterBottom>
            <Button className={classes.editButton} onClick={handelEdit}><IoIosSettings className={classes.sttingIcon}/>Edit Profile Settings</Button>
          </Typography>
        </div>
      </div>
    </Container> 
  );
};

export default ProfileBanner;
