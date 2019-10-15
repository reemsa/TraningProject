import React, { useEffect, useState } from 'react';
import useStyles from './NewArticleStyles'
import { TextField, Button } from '@material-ui/core';
import { axiosGet, axiosPutWithAuthentication, axiosPostWithAuthentication } from '../../network/AXIOS';
import EnterdTag from '../Buttons/EnterdTag'
interface IProps{
    slug:string
}
const NewArticle:React.FC<IProps>=({slug})=>{
    const classes=useStyles()
    const [tagValue, setTagValue] = useState("");
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")
    const [body,setBody]=useState("");
    const temp :any[]=[]
    const [tags,setTags]=useState(temp)
    const [tagList,setTagList]=useState(temp);
    const enterHandel=(event:any)=>{
        if(event.keyCode==13&&tags.indexOf(tagValue)==-1){
            setTags([...tags,tagValue])
        }
        setTagValue("")
    }
    const editArticle=()=>{
        let apiBody={
            "article":{
                "title":title,
                "body":body,
                "description":description,
                "tagList":tags
            }
        }
        axiosPutWithAuthentication(`articles/${slug}`,apiBody).then(res=>{
            console.log(res.data)
        })
    }
    const newArticle=()=>{
        let apiBody={
            "article":{
                "title":title,
                "body":body,
                "description":description,
                "tagList":tags
            }
        }
        axiosPostWithAuthentication("articles",apiBody).then(res=>{
            console.log(res.data.article.slug)
            window.location.href = `/article/${res.data.article.slug}`;
        })
    }
    const closeHandler=(tagValue:string)=>{
        for(let i=0;i<tags.length;i++){
            if(tags[i]!=tagValue){
                temp.push(tags[i])
            }
        }
        setTagList([])
        setTags(temp)        
      }
    useEffect(()=>{
        if(slug!="null"){
            axiosGet(`articles/${slug}`).then(res=>{
                setTitle(res.data.article.title)
                setBody(res.data.article.body)
                setDescription(res.data.article.description)
                setTags(res.data.article.tagList)
            })
        }
    },[slug])
    useEffect(()=>{
        let temp:any[]=[]
        for(let i=0;i<tags.length;i++){
            console.log("tags[i]="+tags[i])
            temp.push(<EnterdTag data={tags[i]} onClickHandler={closeHandler}></EnterdTag>)
        }
        setTagList(temp)
    },[tags])

    //create new article
    if(slug==null||slug==undefined||slug=="null"){
        return(
            <div className={classes.container}>
                <div className={classes.div}>
                    <TextField
                        id="Title"
                        label="Article Title"
                        className={classes.textField}
                        value={title}
                        onChange={(event)=>{
                            setTitle(event.target.value)
                        }}
                    />
                </div>
                <div className={classes.div}>
                    <TextField
                        id="Title"
                        label="what this article about ?"
                        className={classes.textField}
                        value={description}
                        onChange={(event)=>{
                            setDescription(event.target.value)
                        }}
                    />
                </div>
                <div className={classes.div}>
                    <TextField
                        id="standard-multiline-static"
                        label="Write your article (in markdown)"
                        multiline
                        rows="8"
                        className={classes.textField}
                        value={body}
                        onChange={(event)=>{
                            setBody(event.target.value)
                        }}
                    />
                </div>
                <div className={classes.div}>
                    <TextField
                        id="Title"
                        label="Enter Tags"
                        className={classes.textField}
                        value={tagValue}
                        onKeyDown={enterHandel}   
                        onChange={(event)=>{
                            setTagValue(event.target.value)
                        }}
                    />
                </div>
                <div className={classes.tagsDiv}>{tagList}</div>
                <div className={classes.div}>
                    <div className={classes.buttonDiv}>
                        <Button className={classes.button} onClick={newArticle}>Publish Article</Button>
                    </div>
                </div>
            </div>
        )
    }
    //edit article
    else{
        return(
            <div className={classes.container}>
                <div className={classes.div}>
                    <TextField
                        id="Title"
                        label="Article Title"
                        className={classes.textField}
                        value={title}
                        onChange={(event)=>{
                            setTitle(event.target.value)
                        }}
                    />
                </div>
                <div className={classes.div}>
                    <TextField
                        id="Title"
                        label="what this article about ?"
                        className={classes.textField}
                        value={description}
                        onChange={(event)=>{
                            setDescription(event.target.value)
                        }}
                    />
                </div>
                <div className={classes.div}>
                    <TextField
                        id="standard-multiline-static"
                        label="Write your article (in markdown)"
                        multiline
                        rows="8"
                        className={classes.textField}
                        value={body}
                        onChange={(event)=>{
                            setBody(event.target.value)
                        }}
                    />
                </div>
                <div className={classes.div}>
                    <TextField
                        id="Title"
                        label="Enter Tags"
                        className={classes.textField}
                        value={tagValue}
                        onKeyDown={enterHandel} 
                        onChange={(event)=>{
                            setTagValue(event.target.value)
                        }}
                    />
                </div>
                <div className={classes.tagsDiv}>{tagList}</div>
                <div className={classes.div}>
                    <div className={classes.buttonDiv}>
                        <Button className={classes.button} onClick={editArticle}>Publish Article</Button>
                    </div>
                </div>
            </div>
        )
    } 
}
export default NewArticle