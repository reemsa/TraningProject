import React, { useState, useEffect } from "react";
import useStyles from "./SettingsStyles";
import { TextField, Button, Typography, Grid } from "@material-ui/core";
interface SettingsProps{
  imageURL:string,
  userName:string,
  bio:string,
  email:string,
  handelUpdate:(password:string,userName:string,userEmail:string,userBio:string,userImage:string)=>void,
  handelClose:()=>void,
  errorMessage:string
}
const Settings: React.FC<SettingsProps>= ({imageURL,userName,bio,email,handelUpdate,handelClose,errorMessage}) => {
  const classes = useStyles();
  const [username, setUsername] = useState(userName);
  const [userURL, setUserURL] = useState(imageURL);
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState("");
  const [userBio, setUserBio] = useState(bio);
  useEffect(()=>{
    setUsername(userName);
    setUserURL(imageURL);
    setUserEmail(email);
    setUserBio(bio);
  },[imageURL,userName,bio,email])
  const handelURLChange=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setUserURL(event.target.value)
  }
  const handelNameChange=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setUsername(event.target.value)
  }
  const handelBioChange=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setUserBio(event.target.value)
  }
  const handelEmailChange=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setUserEmail(event.target.value)
  }
  const handelPasswordChange=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setUserPassword(event.target.value)
  }
  return (
    <>
    <Grid container spacing={3}>
      <Grid item xs={1}/>
      <Grid item xs={10}>
      <div className={classes.container}>
      <Typography className={classes.title}>Your Settings</Typography>
      <Typography>{errorMessage}</Typography>
        <TextField
         variant="outlined"
          id="URL"
          defaultValue={imageURL == "" ? "" : imageURL}
          label={imageURL == "" ? "URL of profile picture" : ""}
          className={classes.textField}
          margin="normal"
          value={userURL}
          onChange={handelURLChange}
        />
        <TextField
         variant="outlined"
          id="USERNAME"
          defaultValue={userName}
          className={classes.textField}
          margin="normal"
          value={username}
          onChange={handelNameChange}
        />
        <TextField
         variant="outlined"
          id="BIO"
          label="Short bio about you"
          multiline
          rows="8"
          defaultValue={bio}
          className={classes.textField}
          value={userBio}
          onChange={handelBioChange}
        />
        <TextField
         variant="outlined"
          id="EMAIL"
          defaultValue={email}
          className={classes.textField}
          margin="normal"
          value={userEmail}
          onChange={handelEmailChange}
        />
        <TextField
         variant="outlined"
          id="PASSWORD"
          label="New password"
          className={classes.textField}
          value={userPassword}
          onChange={handelPasswordChange}
        />
      
        <div className={classes.settingButtonDiv}>
          <Button className={classes.settingButton} onClick={()=>handelUpdate(userPassword,username,userEmail,userBio,userURL)}>
            Update Settings
          </Button>
        </div>
        <div className={classes.lineDiv}/>
        <div className={classes.logOutDiv}>
          <Button className={classes.logOutButton} onClick={()=>handelClose()}>
            Or click here to logout
          </Button>
        </div>
          </div>
      </Grid>
      <Grid item xs={1}/>
    </Grid>
    </>
  );
}
export default Settings;
