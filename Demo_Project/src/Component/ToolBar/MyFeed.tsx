import React, { useState, useEffect } from "react";
import ArticleCard from "../Artical/ArticleCard";
import { axiosGet } from "../../network/AXIOS";
import PageNumbers from "../PageNumber/PageNumbers";

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
interface MyFeedProps {
  userName: string;
}
const MyFeed: React.FC<MyFeedProps> = ({ userName }) => {
  const articles: any = [];
  const [articlesArray, setArticlesArray] = useState([]);
  const [pageNumber,setPageNumber]=useState(1)
  const [progressFlage,setProgressFlage]=useState(false)
  const onclickHandler = (index: number) => {
    axiosGet("articles", `author=${userName}&limit=10&offset=${index * 10}`).then(res => {
      setProgressFlage(true)
      setArticlesArray(res.data.articles);
      temp = articlesArray;
    });
  };
  useEffect(() => {
    if (userName) {
      axiosGet("articles", `author=${userName}`).then(res => {
        setProgressFlage(true)
        setArticlesArray(res.data.articles);
        setPageNumber(res.data.articlesCount)
        
      });
    }
  }, [userName]);
  let temp: IArticle[] = articlesArray;
  if (temp[0] == undefined&&progressFlage===false) {
    articles.push("loading articles.....");
  }
  else if(temp[0] == undefined&&progressFlage===true){
    articles.push("No articles are here... yet.");
  }else {
    for (let i = 0; i < temp.length; i++) {
      articles.push(
        <ArticleCard
          userName={temp[i].author.username}
          date={temp[i].createdAt}
          title={temp[i].title}
          description={temp[i].description}
          image={temp[i].author.image}
          slug={temp[i].slug}
        />
      );
    }
  }
  return (
    <div>
      <div>{articles}</div>
      <PageNumbers onClick={onclickHandler} pageNumber={pageNumber<10?0:Math.ceil((pageNumber/10))}></PageNumbers> 
  </div>

    );
};
export default MyFeed;
