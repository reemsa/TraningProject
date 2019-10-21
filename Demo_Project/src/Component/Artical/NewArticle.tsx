import React, { useEffect, useState } from "react";
import useStyles from "./NewArticleStyles";
import { TextField, Button, Typography, Grid } from "@material-ui/core";
import {
  axiosGet,
  axiosPutWithAuthentication,
  axiosPostWithAuthentication
} from "../../network/AXIOS";
import EnterdTag from "../Buttons/EnterdTag";
interface NewArticleProps {
  slug: string;
}
interface ArticleFormErrors {
  body?: string; 
  description?: string; 
  title?: string; 
}
const NewArticle: React.FC<NewArticleProps> = ({ slug }) => {
  const classes = useStyles();
  const [tagValue, setTagValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const temp: string[] = [];
  const [tags, setTags] = useState<string[]>([]);
  const [tagList, setTagList] = useState();
  const [errorMessage,setErrorMessage]=useState<ArticleFormErrors>({})
  const enterHandel = (event: any) => {
    if (event.keyCode == 13 && tags.indexOf(tagValue) == -1) {
      setTags([...tags, tagValue]);
    }
    setTagValue("");
  };
  const editArticle = () => {
    const apiBody = {
      article: {
        title: title,
        body: body,
        description: description,
        tagList: tags
      }
    };
    axiosPutWithAuthentication(`articles/${slug}`, apiBody).then(res => {
      window.location.href='/profile'
    })
  };
  const newArticle = () => {
    const apiBody = {
      article: {
        title: title,
        body: body,
        description: description,
        tagList: tags
      }
    };
    axiosPostWithAuthentication("articles", apiBody).then(res => {
      window.location.href = `/article/${res.data.article.slug}`;
    }).catch(error=>{
      setErrorMessage(error.response.data.errors)
    });
  };
  const closeHandler = (tagValue: string) => {
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] != tagValue) {
        temp.push(tags[i]);
      }
    }
    setTagList([]);
    setTags(temp);
  };
  const handelTitle=(event:any)=>{setTitle(event.target.value)}
  const handelDescription=(event:any)=>{setDescription(event.target.value)}
  const handelTagValue=(event:any)=>{setTagValue(event.target.value)}
  const handelBody=(event:any)=>{setBody(event.target.value)}
  useEffect(() => {
    if (slug != "null") {
      axiosGet(`articles/${slug}`).then(res => {
        setTitle(res.data.article.title);
        setBody(res.data.article.body);
        setDescription(res.data.article.description);
        setTags(res.data.article.tagList);
      });
    }
  }, [slug]);
  useEffect(() => {
    const temp: JSX.Element[] = [];
    for (let i = 0; i < tags.length; i++) {
      temp.push(
        <EnterdTag data={tags[i]} onClickHandler={closeHandler}></EnterdTag>
      );
    }
    setTagList(temp);
  }, [tags]);
    return (
      <>
      <Grid container spacing={3}>
        <Grid item xs={1}/>
        <Grid item xs={10}>
      <div className={classes.container}>
        {errorMessage.title && <Typography color='error'>{"*title " + errorMessage.title}</Typography>}
        {errorMessage.body && <Typography color='error'>{"*body " + errorMessage.body}</Typography>}
        {errorMessage.description && <Typography color='error'>{"*description " + errorMessage.description}</Typography>}
          <TextField
            variant="outlined"
            id="Title"
            label="Article Title"
            className={classes.textField}
            value={title}
            margin="normal"
            onChange={handelTitle}
          />
          <TextField
            variant="outlined"
            id="Title"
            margin="normal"
            label="what this article about ?"
            className={classes.textField}
            value={description}
            onChange={handelDescription}
          />
          <TextField
            variant="outlined"
            id="standard-multiline-static"
            label="Write your article (in markdown)"
            multiline
            rows="8"
            margin="normal"
            className={classes.textField}
            value={body}
            onChange={handelBody}
          />
          <TextField
            variant="outlined"
            id="Title"
            label="Enter Tags"
            margin="normal"
            className={classes.textField}
            value={tagValue}
            onKeyDown={enterHandel}
            onChange={handelTagValue}
          />
        <div className={classes.tagsDiv}>{tagList}</div>
            <Button className={classes.button} onClick={(slug==null||slug==undefined||slug=="null")?newArticle:editArticle}>
              Publish Article
            </Button>
       </div>
      </Grid>
      <Grid item xs={1}/>
    </Grid>
    </>
    );
};
export default NewArticle;
