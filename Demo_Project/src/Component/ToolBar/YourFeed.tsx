import React, { useState, useEffect } from "react";
import ArticleCard from "../Artical/ArticleCard";
import { axiosGetWithAuthentication, axiosGet } from "../../network/AXIOS";
import PageNumbers from "../PageNumber/PageNumbers";
import { isUserLoggedIn } from "../../network/userUtilte";
//todo edit content
interface IAuthor {
  bio: string;
  following: boolean;
  image: string;
  username: string;
}
interface IArticle {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  description: string;
  tagList: string[];
  body: string;
  author: IAuthor;
}
const YourFeed: React.FC = () => {
  const articles: any = [];
  const [articlesArray, setArticlesArray] = useState([]);
  const [pageNumber,setPageNumber]=useState(10)
  useEffect(() => {
    if(isUserLoggedIn()){
      axiosGetWithAuthentication("articles/feed", "limit=10").then(res => {
        setArticlesArray(res.data.articles);
        setPageNumber(res.data.articlesCount)
      });
    }
    else{
      axiosGet("articles/feed", "limit=10").then(res => {
        setArticlesArray(res.data.articles);
        setPageNumber(res.data.articlesCount)
      });
    }

  }, []);
  const onclickHandler = (index: number) => {
    if(isUserLoggedIn()){
      axiosGetWithAuthentication("articles/feed", `limit=10&offset=${index * 10}`).then(res => {
        temp = res.data.articles;
        console.log(res.data.articles)
        setArticlesArray(res.data.articles)      
      });
    }
    else{
      axiosGet("articles/feed", `limit=10&offset=${index * 10}`).then(res => {
        temp = res.data.articles;
        console.log(res.data.articles)
        setArticlesArray(res.data.articles)      
      });
    }

  };
  let temp: IArticle[] = articlesArray;
  if (temp[0] == undefined) {
    articles.push("loading articles");
  } else {
    for (let i = 0; i < 10; i++) {
      if(temp[i]!=undefined){
        articles.push(
          <ArticleCard
            slug={temp[i].slug}
            userName={temp[i].author.username}
            date={temp[i].createdAt}
            title={temp[i].title}
            description={temp[i].description}
            image={temp[i].author.image}
          />
        );
      }
    }
  }
  return(
    <div>
      <div>{articles}</div>
      <PageNumbers onClick={onclickHandler} pageNumber={pageNumber<10?1:Math.ceil((pageNumber/10))}></PageNumbers> 
    </div>
     );
};
export default YourFeed;
