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
    let temp:IArticle[]=articlesArray
    useEffect(() => {
        if(userName) {
            axiosGet("articles",`favorited=${userName}`).then(res=>{
                if(res.data.articles.length==0){
                    articles.push("No articles are here... yet.") 
                }
                setArticlesArray(res.data.articles)
                temp=articlesArray
        })
        }
      }, [userName]);

 
     if(temp[0]==undefined&&articles.length==0){
        articles.push("No articles are here... yet.")  
    }
    
    else if(temp.length==0&&temp[0]!=undefined){
        articles.push("No articles are here... yet.") 
    }
    else{
        for(let i=0;i<temp.length;i++){
            articles.push(<ArticleCard  userName= {temp[i].author.username} date={temp[i].createdAt} title={temp[i].title} description= {temp[i].description} image={temp[i].author.image} slug={temp[i].slug} />)
        }
    }
    return <div>{articles}</div>
}
export default FavoritedFeed