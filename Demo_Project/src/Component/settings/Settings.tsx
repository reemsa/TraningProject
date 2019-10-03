import React from 'react';
import useStyles from './SettingsStyles';
import { TextField, Button, Typography } from '@material-ui/core';
const Settings =()=>{
    const classes=useStyles()
    let username="reem"
    let email="reem2gmail.com"
    const [name, setName] = React.useState("");
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
                    // margin="normal"
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
                    //margin="normal"
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
                    // margin="normal"
                />
            </div>
            <div className={classes.div}>
                <div className={classes.buttonDiv}>
                    <Button className={classes.button}>Update Settings</Button>
                </div>
            </div>
            <div className={classes.div}>
                <div className={classes.logOutDiv}>
                    <Button className={classes.logOutButton}>or click here to logout</Button>
                </div>
            </div>
        </div>
    )
}
export default Settings