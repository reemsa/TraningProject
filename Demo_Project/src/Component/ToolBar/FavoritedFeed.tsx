import React, { useState, useEffect } from 'react';
import ArticleCard from '../Artical/ArticleCard';
import {axiosGet} from '../../network/AXIOS'
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
interface IProps{
    userName:string
}
const FavoritedFeed:React.FC<IProps>=({userName})=>{
    let articles:any=[]
    let [articlesArray,setArticlesArray]=useState([])
    useEffect(() => {
        axiosGet("articles",`favorited=${userName}`).then(res=>{
            setArticlesArray(res.data.articles)
            console.log(res.data.articles)
        })
      }, []);
      let temp:IArticle[]=articlesArray
    if(temp.length==0){
        articles.push(" no favorite article") 
    }
    else if(temp[0]==undefined){
        articles.push("loading articles")  
    }
    else{
        for(let i=0;i<temp.length;i++){
            articles.push(<ArticleCard  userName= {temp[i].author.username} date={temp[i].createdAt} title={temp[i].title} description= {temp[i].description} image={temp[i].author.image}  />)
        }
    }
    return <div>{articles}</div>
}
export default FavoritedFeed