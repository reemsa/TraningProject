import React,{useState} from 'react';
import useStyles from './SettingsStyles';
import { TextField, Button, Typography } from '@material-ui/core';
import {setCurrentUser,getUser} from '../../network/user'
import {axiosPutWithAuthentication} from '../../network/AXIOS'
const Settings:React.FC=()=>{
    const classes=useStyles()
    const [user,setUser]=useState(getUser())
    let username=""
    let email=""
    let imageURL=""
    let readBio=""
    if(user!="null"&&user!=null){
      username=JSON.parse(user as string).username;
      email=JSON.parse(user as string).email
      imageURL=JSON.parse(user as string).image
      readBio=JSON.parse(user as string).bio
    }
    const [name, setName] =useState(username);
    const [URL, setURL] = useState(imageURL);
    const [emailaddress, setEmailaddress] = useState(email);
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState(readBio);
    const handelClose=()=>{
        setCurrentUser(null)
        window.location.href = "/";
    }
    const handelUpdate=()=>{
        let body={
            "user":{
              "email":emailaddress||undefined,
              "bio":bio||undefined,
              "image":URL||undefined ,
              "username":name||undefined,
              "password":password||undefined
            }
          }
        axiosPutWithAuthentication("user",body)      
        .then(res => {
            setCurrentUser(res.data.user)
            setUser(getUser())
            window.location.href = "/profile";
          });
    }
    return(
        <div className={classes.container}>
            <Typography className={classes.text}>Your Settings</Typography>
            <div className={classes.div}>
                <TextField
                         id="URL"
                         defaultValue={imageURL==""?"":imageURL}
                         label={imageURL==""?"URL of profile picture":''}
                         className={classes.textField}
                         margin="normal"
                         value={URL}
                         onChange={event => setURL(event.target.value)}
                />
            </div>
            <div className={classes.div}>
                <TextField
                        id="USERNAME"
                        defaultValue={username}
                        className={classes.textField}
                        margin="normal"
                        value={name}
                        onChange={event => setName(event.target.value)}
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="BIO"
                    label="Short bio about you"
                    multiline
                    rows="8"
                    defaultValue={readBio}
                    className={classes.textField}
                    value={bio}
                    onChange={event => setBio(event.target.value)}
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="EMAIL"
                    defaultValue={email}
                    className={classes.textField}
                    margin="normal"
                    value={emailaddress}
                    onChange={event => setEmailaddress(event.target.value)}
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="PASSWORD"
                    label="New password"
                    defaultValue={email}
                    className={classes.textField}
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
            </div>
            <div className={classes.div}>
                <div className={classes.buttonDiv}>
                    <Button className={classes.button} onClick={handelUpdate}>Update Settings</Button>
                </div>
            </div>
            <div className={classes.div}>
                <div className={classes.logOutDiv}>
                    <Button className={classes.logOutButton} onClick={handelClose}>or click here to logout</Button>
                </div>
            </div>
        </div>
    )
}
export default Settings