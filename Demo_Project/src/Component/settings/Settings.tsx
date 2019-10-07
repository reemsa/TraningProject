import React from 'react';
import useStyles from './SettingsStyles';
import { TextField, Button, Typography } from '@material-ui/core';
import {setCurrentUser,getUser} from '../../network/user'
const Settings:React.FC=()=>{
    const classes=useStyles()
    const user=getUser()
    let username=""
    let email=""
    let url=""
    if(user!="null"&&user!=null){
      username=JSON.parse(user as string).username;
      email=JSON.parse(user as string).email
      url=JSON.parse(user as string).image
    }
    const [name, setName] = React.useState(username);
    const [URL, setURL] = React.useState(url);
    const [emailaddress, setEmailaddress] = React.useState(email);
    const [password, setPassword] = React.useState("");
    const [bio, setBio] = React.useState("");
    let handelClose=()=>{
        setCurrentUser(null)
        window.location.href = "/";
    }
    let handelUpdate=()=>{

    }
    return(
        <div className={classes.container}>
            <Typography className={classes.text}>Your Settings</Typography>
            <div className={classes.div}>
                <TextField
                         id="URL"
                         defaultValue={url==""?"":url}
                         label={url==""?"URL of profile picture":''}
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