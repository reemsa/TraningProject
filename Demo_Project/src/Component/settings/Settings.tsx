import React, { useState, useEffect } from "react";
import useStyles from "./SettingsStyles";
import { TextField, Button, Typography, Grid } from "@material-ui/core";
import { AppState } from "../../store/Store";
import { logInAction } from "../../actions/LogInAction";
import { connect } from "react-redux";
interface SettingsProps{
  handelUpdate:(password:string,userName:string,userEmail:string,userBio:string,userImage:string)=>void,
  handelClose:()=>void,
  errorMessage:string
}
interface ConnectedSettingsProps
{
    user: {
    userName: string,
    userBio: string,
    userEmail: string,
    userImage: string,
    flag:boolean
  }
  
}
const Settings: React.FC<SettingsProps&ConnectedSettingsProps>= ({handelUpdate,handelClose,errorMessage,user}) => {
  const classes = useStyles();
  const [username, setUsername] = useState(user.userName);
  const [userURL, setUserURL] = useState(user.userImage);
  const [userEmail, setUserEmail] = useState(user.userEmail);
  const [userPassword, setUserPassword] = useState("");
  const [userBio, setUserBio] = useState(user.userBio);
  useEffect(()=>{
    setUsername(user.userName);
    setUserURL(user.userImage);
    setUserEmail(user.userEmail);
    setUserBio(user.userBio);
  },[user])
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
          defaultValue={user.userImage == "" ? "" : user.userImage}
          label={user.userImage == "" ? "URL of profile picture" : ""}
          className={classes.textField}
          margin="normal"
          value={userURL}
          onChange={handelURLChange}
        />
        <TextField
         variant="outlined"
          id="USERNAME"
          defaultValue={user.userName}
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
          defaultValue={user.userBio}
          className={classes.textField}
          value={userBio}
          onChange={handelBioChange}
        />
        <TextField
         variant="outlined"
          id="EMAIL"
          defaultValue={user.userEmail}
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
const mapStateToProps = (state: AppState) => ({ 
  user: {
    userName: state.logInReducer.userName,
    userBio: state.logInReducer.userBio,
    userEmail: state.logInReducer.userEmail,
    userImage: state.logInReducer.userImage,
    flag:state.logInReducer.flag
  }
})
export default connect(mapStateToProps,{logInAction})(Settings)

