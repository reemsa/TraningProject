import React, { useState, useEffect } from "react";
import ArticleCard from "../Artical/ArticleCard";
import { axiosGet } from "../../network/AXIOS";
import PageNumbers from "../PageNumber/PageNumbers";
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
interface FavoritedFeedProps {
  userName: string;
}
const FavoritedFeed: React.FC<FavoritedFeedProps> = ({ userName }) => {
  const articles: any = [];
  const [articlesArray, setArticlesArray] = useState([]);
  const [pageNumber,setPageNumber]=useState(10)
  let temp: IArticle[] = articlesArray;
  useEffect(() => {
    if (userName) {
      axiosGet("articles", `favorited=${userName}`).then(res => {
        if (res.data.articles.length == 0) {
          articles.push("No articles are here... yet.");
        }
        setArticlesArray(res.data.articles);
        setPageNumber(res.data.articlesCount)
        temp = articlesArray;
      });
    }
  }, [userName]);
  const onclickHandler = (index: number) => {
    axiosGet("articles", `favorited=${userName}&limit=10&offset=${index * 10}`).then(res => {
      setArticlesArray(res.data.articles);
      temp = articlesArray;
    });
   };
  if (temp[0] == undefined && articles.length == 0) {
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
      <PageNumbers onClick={onclickHandler} pageNumber={pageNumber<10?1:Math.ceil((pageNumber/10))}></PageNumbers>
    </div>
  );
};
export default FavoritedFeed;
