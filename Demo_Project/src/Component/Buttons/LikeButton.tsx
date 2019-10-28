import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { IoIosHeart } from "react-icons/io";
import useStyles from "./LikeButtonStyles";
import {
  axiosGetWithAuthentication,
  axiosPostWithAuthentication,
  axiosDeleteWithAuthentication,
  axiosGet
} from "../../network/AXIOS";
import { connect } from "react-redux";
import { AppState } from "../../store/Store";
interface LikeButtonProps {
  slug: string;
}
interface ConnectedLikeButtonProps
{
  flag:boolean
}
const LikeButton: React.FC<LikeButtonProps&ConnectedLikeButtonProps> = ({ slug,flag }) => {
  const classes = useStyles();
  const [likeCount, setLikeCount] = useState(0);
  const [favorited, setFavorited] = useState(false);
  const likeHandler = (slug: string) => {
    if (!flag) {
      window.location.href = "/register";
    } else {
      if (favorited == false) {
        axiosPostWithAuthentication(`articles/${slug}/favorite`, {}).then(
          res => {
            setFavorited(res.data.article.favorited);
            setLikeCount(res.data.article.favoritesCount);
          }
        );
      } else {
        axiosDeleteWithAuthentication(`articles/${slug}/favorite`).then(res => {
          setFavorited(res.data.article.favorited);
          setLikeCount(res.data.article.favoritesCount);
        });
      }
    }
  };
  useEffect(() => {
    if (!flag) {
      axiosGet(`articles/${slug}`).then(res => {
        setLikeCount(res.data.article.favoritesCount);
        setFavorited(res.data.article.favorited);
      });
    } else {
      axiosGetWithAuthentication(`articles/${slug}`).then(res => {
        setLikeCount(res.data.article.favoritesCount);
        setFavorited(res.data.article.favorited);
      });
    }
  }, [slug]);
  return (
    <div>
      <Button
        onClick={() => likeHandler(slug)}
        className={
          favorited ? classes.favoritedButton : classes.notFavoritedButton
        }
      >
        <IoIosHeart fontSize="small"/>
        {likeCount}
      </Button>
    </div>
  );
};
const mapStateToProps = (state:AppState) => ({
  flag:state.logInReducer.flag
})
export default connect(mapStateToProps)(LikeButton)
