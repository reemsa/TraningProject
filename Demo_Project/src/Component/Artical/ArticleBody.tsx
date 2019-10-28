import React, { useEffect, useState } from "react";
import useStyles from "./ArticleBodyStyle";
import {
  axiosGetWithAuthentication,
  axiosGet,
} from "../../network/AXIOS";
import Comment from "../Comment/Comment";
import TagButton from "./ArticleTagButton";
import { AppState } from "../../store/Store";
import { connect } from "react-redux";
interface IUser{
  userName: string;
  userImage: string;
  userBio: string;
  userEmail: string;
  flag:boolean;
}
interface ArticleBodyProps {
  slug: string;
}
interface ConnectedArticleBodyProps
{
  flag: boolean
}
const ArticleBody: React.FC<ArticleBodyProps&ConnectedArticleBodyProps> = ({ slug,flag }) => {
  const classes = useStyles();
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  let tagList: any[] = [];
  useEffect(() => {
    if (!flag) {
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
const mapStateToProps = (state: AppState) => ({ 
  flag:state.logInReducer.flag
})
export default connect(mapStateToProps)(ArticleBody)
