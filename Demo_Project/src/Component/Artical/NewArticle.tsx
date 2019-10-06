import React from 'react';
import useStyles from './NewArticleStyles'
import { TextField, Button } from '@material-ui/core';
function NewArticle(){
    const classes=useStyles()
    const [name, setName] = React.useState("");
    return(
        <div className={classes.container}>
            <div className={classes.div}>
                <TextField
                    id="Title"
                    label="Article Title"
                    className={classes.textField}
                    value={name}
                    //onChange={handleChange('name')}
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="Title"
                    label="what this article about ?"
                    className={classes.textField}
                    value={name}
                    //onChange={handleChange('name')}
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="standard-multiline-static"
                    label="Write your article (in markdown)"
                    multiline
                    rows="8"
                    className={classes.textField}
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="Title"
                    label="Enter Tags"
                    className={classes.textField}
                    value={name}
                    //onChange={handleChange('name')}
                />
            </div>
            <div className={classes.div}>
                <div className={classes.buttonDiv}>
                    <Button className={classes.button}>Publish Article</Button>
                </div>
            </div>
        </div>
    )

}
export default NewArticle