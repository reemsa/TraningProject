import React, { useEffect, useState } from "react";
import {isUserLoggedIn } from "../../network/userUtilte";
import useStyles from "./ArticleBodyStyle";
import {
  axiosGetWithAuthentication,
  axiosGet,
} from "../../network/AXIOS";
import Comment from "../Comment/Comment";
import TagButton from "./ArticleTagButton";
interface ArticleBodyProps {
  slug: string;
}
const ArticleBody: React.FC<ArticleBodyProps> = ({ slug }) => {
  const classes = useStyles();
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  let tagList: any[] = [];
  useEffect(() => {
    if (!isUserLoggedIn()) {
      axiosGet(`articles/${slug}`).then(res => {
        setBody(res.data.article.body);
        setTags(res.data.article.tagList);
      });
    } else {
      axiosGetWithAuthentication(`articles/${slug}`).then(res => {
        setBody(res.data.article.body);
        setTags(res.data.article.tagList);
      });
    }
  }, [slug]);
  for (let i = 0; i < tags.length; i++) {
    tagList.push(<TagButton data={tags[i]}></TagButton>);
  }
  return (
    <div>
      <div className={classes.bodyText}>{body}</div>
      <div className={classes.bodyTags}>{tagList}</div>
      <Comment slug={slug}></Comment>
    </div>
  );
};
export default ArticleBody;
