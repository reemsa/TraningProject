import React, { useState, useEffect } from "react";
import ArticleCard from "../Artical/ArticleCard";
import { axiosGet } from "../../network/AXIOS";
import PageNumbers from "../PageNumber/PageNumbers";
import CircularProgress from '@material-ui/core/CircularProgress';

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
const GlobalFeed: React.FC = () => {
  const articles: any = [];
  const [articlesArray, setArticlesArray] = useState([]);
  const [pageNumber,setPageNumber]=useState(1)
  const [progressFlage,setProgressFlage]=useState(false)
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    function tick() {
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }
    const timer = setInterval(tick, 20);
    if(progressFlage===true){
      clearInterval(timer);
    }
  }, [progressFlage]);
  useEffect(() => {
    axiosGet("articles", "limit=10").then(res => {
      setArticlesArray(res.data.articles);
      setPageNumber(res.data.articlesCount);
      setProgressFlage(true)
    });
  }, []);
  let temp: IArticle[] = articlesArray;

  if (temp[0] == undefined&&progressFlage==false) {
    articles.push("loading articles.....");
    articles.push(    <CircularProgress
    variant="determinate"
    value={progress}
    color="secondary"
  />)

  }
  else if(temp[0] == undefined&&progressFlage==true){
    articles.push("No articles are here... yet.");
  }
   else {
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
    axiosGet("articles", `limit=10&offset=${index * 10}`).then(res => {
      setArticlesArray(res.data.articles);
      setProgressFlage(true)
      temp = articlesArray;
    });
   };
  return (
    <div>
      <div>{articles}</div>
      <PageNumbers onClick={onclickHandler} pageNumber={pageNumber<10?0:Math.ceil((pageNumber/10))}></PageNumbers>
    </div>
  );
};
export default GlobalFeed;
