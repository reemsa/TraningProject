import React from 'react';
import useStyles from './SettingsStyles';
import { TextField, Button, Typography } from '@material-ui/core';
const Settings:React.FC=()=>{
    const classes=useStyles()
    //let username=localStorage.getItem("user")
    const user=localStorage.getItem("user");
    let username=""
    let email=""
    if(user!="null"&&user!=null){
      username=JSON.parse(localStorage.getItem("user") as string).username;
      email=JSON.parse(localStorage.getItem("user") as string).email
    }
    const [name, setName] = React.useState("");
    let handelcloseclick=()=>{
        localStorage.setItem("user", "null");
        window.location.href = "/";
    }
    return(
        <div className={classes.container}>
            <Typography className={classes.text}>Your Settings</Typography>
            <div className={classes.div}>
                <TextField
                    id="Title"
                    label="URL of profile picture"
                    className={classes.textField}
                    value={name}
                    //onChange={handleChange('name')}
                />
            </div>
            <div className={classes.div}>
                <TextField
                        id="standard-helperText"
                        defaultValue={username}
                        className={classes.textField}
                        margin="normal"
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="standard-multiline-static"
                    label="Short bio about you"
                    multiline
                    rows="8"
                    className={classes.textField}
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="standard-helperText"
                    defaultValue={email}
                    className={classes.textField}
                    margin="normal"
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="Title"
                    label="New password"
                    defaultValue={email}
                    className={classes.textField}
                    value={name}
                    //onChange={handleChange('name')}
                />
            </div>
            <div className={classes.div}>
                <div className={classes.buttonDiv}>
                    <Button className={classes.button}>Update Settings</Button>
                </div>
            </div>
            <div className={classes.div}>
                <div className={classes.logOutDiv}>
                    <Button className={classes.logOutButton} onClick={handelcloseclick}>or click here to logout</Button>
                </div>
            </div>
        </div>
    )
}
export default Settings