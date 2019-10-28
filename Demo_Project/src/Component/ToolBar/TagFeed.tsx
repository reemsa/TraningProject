import React, { useState, useEffect } from "react";
import ArticleCard from "../Artical/ArticleCard";
import { axiosGet } from "../../network/AXIOS";
import PageNumbers from "../PageNumber/PageNumbers";

interface IProps {
  tagName: string;
}
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
const TagFeed: React.FC<IProps> = ({ tagName }) =>
{
  let articles: any = [];
  const [articlesArray, setArticlesArray] = useState([]);
  const [pageNumber,setPageNumber]=useState(1)
  const [progressFlage,setProgressFlage]=useState(false)
  useEffect(() => {
    axiosGet("articles", `limit=10&tag=${tagName}`).then(res => {
      setProgressFlage(true)
      setPageNumber(res.data.articlesCount)
      setArticlesArray(res.data.articles);
    });
  }, [tagName]);
  let temp: IArticle[] = articlesArray;
  if (temp[0] == undefined&&progressFlage===false) {
    articles.push("loading articles.....");
  }
  else if(temp[0] == undefined&&progressFlage===true){
    articles.push("No articles are here... yet.");
  } else {
    for (let i = 0; i < 10; i++) {
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
  const onclickHandler = (index: number) => {
    axiosGet("articles", `limit=10&offset=${index * 10}&tag=${tagName}`).then(
      res => {
        setProgressFlage(true)
        setArticlesArray(res.data.articles);
        temp = articlesArray;
      }
    );
    for (let i = 0; i < 10; i++) {
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
  };
  return (
    <div>
      <div>{articles}</div>
      <PageNumbers onClick={onclickHandler} pageNumber={pageNumber<10?0:Math.ceil((pageNumber/10))}></PageNumbers>
    </div>
  );
};
export default TagFeed;
