import React, { useEffect, useState }  from 'react';
import { getUser } from '../../network/user';
import useStyles from "./ArticleBodyStyle";
import { axiosGetWithAuthentication,axiosGet, axiosPostWithAuthentication, axiosDeleteWithAuthentication } from "../../network/AXIOS";
import Comment from '../Comment/Comment';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import TagButton from './TagButton';
interface IProps{
    slug:string
}
const ArticleBody:React.FC<IProps>=({slug})=>{
    const classes = useStyles();
    const [body,setBody]=useState("")
    const [tags,setTags]=useState("")
    let tagList:any[]=[]
    const commentHandler=()=>{

    }
    useEffect(()=>{
        if(getUser()=="null"||getUser()==null){
            axiosGet(`articles/${slug}`).then((res)=>{
                setBody(res.data.article.body)
                setTags(res.data.article.tagList)
              })
        }
        else{
            axiosGetWithAuthentication(`articles/${slug}`).then((res)=>{
                setBody(res.data.article.body)
                setTags(res.data.article.tagList)
              })
        }
    },[slug])
    for(let i=0;i<tags.length;i++){
        tagList.push(<TagButton data={tags[i]}></TagButton>)
    }
    return <div>
        <div className={classes.bodyText}>{body}</div>
        <div className={classes.bodyTags}>{tagList}</div>
        <Comment slug={slug}></Comment>
        </div>
}
export default ArticleBody