import React, { useState, useEffect } from 'react';
import ArticleCard from '../Artical/ArticleCard';
import { axiosGetWithAuthentication} from '../../network/AXIOS'
//todo edit content
interface IAuthor{
    bio:string,
    following:boolean,
    image:string,
    username:string
}
interface IArticle{
    title:string,
    slug:string,
    createdAt:string,
    updatedAt:string,
    favorited:boolean,
    favoritesCount:number,
    description:string,
    tagList:string[],
    body:string,
    author:IAuthor
}
const YourFeed:React.FC=()=>{
    let articles:any=[]
    let [articlesArray,setArticlesArray]=useState([])
    useEffect(() => {
        axiosGetWithAuthentication("articles/feed","limit=10").then(res=>{
            setArticlesArray(res.data.articles)
        })
      }, []);
      console.log(articlesArray)
      let temp:IArticle[]=articlesArray

    if(temp[0]==undefined){
        articles.push("loading articles")  
    }
    else{
        for(let i=0;i<10;i++){
            articles.push(<ArticleCard  userName= {temp[i].author.username} date={temp[i].createdAt} title={temp[i].title} description= {temp[i].description} image={temp[i].author.image}  />)
        }
    }
    return <div>{articles}</div>}
export default YourFeed