import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./ArticleBannerStyle";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import {
  axiosGetWithAuthentication,
  axiosGet,
  axiosPostWithAuthentication,
  axiosDeleteWithAuthentication,
} from "../../network/AXIOS";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Moment from "react-moment";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { getUser } from "../../network/userUtilte";
import { Link } from "react-router-dom";
import {getUserName,isUserLoggedIn} from '../../network/userUtilte'
interface ArticleBannerProps {
  slug: string;
}
interface IAuthor {
  username: string;
  image: string;
  bio: string;
  following: boolean;
}
interface IArticle {
  body: string; //body is article description
  title: string;
  author: IAuthor;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  updatedAt: string;
  tagList: [];
}
const ArticleBanner: React.FC<ArticleBannerProps> = ({ slug }) => {
  const classes = useStyles();
  const inital: IArticle = {
    body: "",
    title: "",
    author: { username: "", bio: "", image: "", following: false },
    createdAt: "",
    description: "",
    favorited: false,
    favoritesCount: 0,
    slug: slug,
    updatedAt: "",
    tagList: []
  };
  const [article, setArticle] = useState<IArticle>(inital);
  const [followingFlage, setFollowingFlage] = useState<boolean>(
    article.author.following
  );
  const [favoriteFlage, setFavoriteFlage] = useState<boolean>(article.favorited);
  const [favoriteCount, setFavoriteCount] = useState<number>(article.favoritesCount);
  useEffect(() => {
    if (!isUserLoggedIn()) {
      axiosGet(`articles/${slug}`).then(res => {
        setArticle(res.data.article);
        setFavoriteFlage(res.data.article.favorited);
        setFavoriteCount(res.data.article.favoritesCount);
        setFollowingFlage(res.data.article.author.following);
      });
    } else {
      axiosGetWithAuthentication(`articles/${slug}`).then(res => {
        setArticle(res.data.article);
        setFavoriteFlage(res.data.article.favorited);
        setFavoriteCount(res.data.article.favoritesCount);
        setFollowingFlage(res.data.article.author.following);
      });
    }
  }, [slug]);
  const handelFollow = () => {
    if (!isUserLoggedIn()) {
      window.location.href = "/register";
    } else {
      axiosPostWithAuthentication(
        `profiles/${article.author.username}/follow`,
        {}
      ).then(res => {
        setFollowingFlage(res.data.profile.following);
      });
    }
  };
  const handelUnFollow = () => {
    if (!isUserLoggedIn()) {
      window.location.href = "/register";
    } else {
      axiosDeleteWithAuthentication(
        `profiles/${article.author.username}/follow`
      ).then(res => {
        setFollowingFlage(res.data.profile.following);
      });
    }
  };
  const handelFavorite = () => {
    if (!isUserLoggedIn()) {
      window.location.href = "/register";
    } 
    else {
      if (favoriteFlage == false) {
        axiosPostWithAuthentication(
          `articles/${article.slug}/favorite`,
          {}
        ).then(res => {
          setFavoriteFlage(res.data.article.favorited);
          setFavoriteCount(res.data.article.favoritesCount);
        });
      }
      else {
        axiosDeleteWithAuthentication(`articles/${article.slug}/favorite`).then(
          res => {
            setFavoriteFlage(res.data.article.favorited);
            setFavoriteCount(res.data.article.favoritesCount);
          }
        );
      }
    }
  };
  const deleteHandler = () => {
    axiosDeleteWithAuthentication(`articles/${slug}`).then(() => {
      window.location.href = "/profile";
    });
  };
  return (
    <Container className={classes.mainContainer}>
      <div className={classes.banner}>
        <div className={classes.container}>
          <br />
          <Typography className={classes.logo_font} variant="body2">
            {article.title}
          </Typography>
          <Typography className={classes.pos}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  <CardMedia
                    className={classes.media}
                    image={article.author.image}
                  />
                </Avatar>
              }
              classes={{
                subheader: classes.subheader,
                action: classes.action
              }}
              action={
                article.author.username != getUserName() ? (
                  <div>
                    <Button
                      className={classes.followButton}
                      onClick={followingFlage ? handelUnFollow : handelFollow}
                    >
                      <AddIcon fontSize="small"></AddIcon>
                      {followingFlage
                        ? `Unfollow ${article.author.username}`
                        : `Follow ${article.author.username}`}
                    </Button>
                    <span>
                      <Button
                        className={classes.favoriteButton}
                        onClick={handelFavorite}
                      >
                        <FavoriteIcon fontSize="small" />
                        {favoriteFlage
                          ? `Unfavorite Article`
                          : `Favorite Article`}
                        {`(${favoriteCount})`}
                      </Button>
                    </span>
                  </div>
                ) : (
                  <div>
                    <Button className={classes.editButton}>
                       <Link to={`/editor/${slug}`} className={classes.link}> 
                        <CreateIcon fontSize="small"/>Edit Article{" "}
                      </Link>
                      </Button>
                    <span className={classes.span}>
                      <Button
                        className={classes.deleteButton}
                        onClick={deleteHandler}
                      >
                        <DeleteIcon fontSize="small"/>
                        Delete Article
                      </Button>
                    </span>
                  </div>
                )
              }
              title={
                <Link
                  className={classes.userName}
                  to={`/author/${article.author.username}`}
                >
                  {article.author.username}
                </Link>
              }
              subheader={
                <Moment className={classes.subheader} format={"MMMM D, YYYY"} date={article.createdAt} />
              }
            />
          </Typography>
          <br />
        </div>
      </div>
    </Container>
  );
};

export default ArticleBanner;
