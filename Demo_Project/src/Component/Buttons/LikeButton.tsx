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
import {isUserLoggedIn } from "../../network/userUtilte";
interface LikeButtonProps {
  slug: string;
}
const LikeButton: React.FC<LikeButtonProps> = ({ slug }) => {
  const classes = useStyles();
  const [likeCount, setLikeCount] = useState(0);
  const [favorited, setFavorited] = useState(false);
  const likeHandler = (slug: string) => {
    if (!isUserLoggedIn()) {
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
    if (!isUserLoggedIn()) {
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
export default LikeButton;
