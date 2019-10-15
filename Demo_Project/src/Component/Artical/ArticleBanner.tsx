import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./ArticleBannerStyle";
import { axiosGetWithAuthentication,axiosGet, axiosPostWithAuthentication, axiosDeleteWithAuthentication, axiosPutWithAuthentication } from "../../network/AXIOS";
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment';
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { getUser } from "../../network/user";
import { Link } from "react-router-dom";
interface IProps {
  slug: string,
}
interface IAuthor{
  username:string,
  image:string,
  bio:string,
  following:boolean
}
interface IArticle{
  body:string,//body is article description
  title:string,
  author:IAuthor,
  createdAt:string,
  description:string,
  favorited:boolean,
  favoritesCount:number,
  slug:string,
  updatedAt:string,
  tagList:[]
}
const Banner:React.FC<IProps> = ({slug}) => {
  const classes = useStyles();
  const logedUser=JSON.parse(getUser() as string).username;
  const inital:IArticle={body:"",title:"",author:{username:"",bio:"",image:"",following:false},createdAt:"",description:"",favorited:false,favoritesCount:0,slug:slug,updatedAt:"",tagList:[]}
  const [article,setArticle]=useState(inital)
  const [followingFlage,setFollowingFlage]=useState(article.author.following)
  const [favoriteFlage,setFavoriteFlage]=useState(article.favorited)
  const [favoriteCount,setFavoriteCount]=useState(article.favoritesCount)
  useEffect(()=>{
    if(getUser()==undefined||getUser()==null||getUser()=="null"){
      axiosGet(`articles/${slug}`).then((res)=>{
        setArticle(res.data.article)
        setFavoriteFlage(res.data.article.favorited)  
        setFavoriteCount(res.data.article.favoritesCount)
        setFollowingFlage(res.data.article.author.following)
      })
    }
    else{
      axiosGetWithAuthentication(`articles/${slug}`).then((res)=>{
        setArticle(res.data.article)
        setFavoriteFlage(res.data.article.favorited)  
        setFavoriteCount(res.data.article.favoritesCount)
        setFollowingFlage(res.data.article.author.following)
      })
    }
  },[slug])
  const handelFollow=()=>{
    if(getUser()==undefined||getUser()=="null"||getUser()==null){
      window.location.href = "/register";
    }
    else{
      axiosPostWithAuthentication(`profiles/${article.author.username}/follow`,{}).then(res=>{
        setFollowingFlage(res.data.profile.following)
        console.log(res.data)
      })
    }
  }
  const handelUnFollow=()=>{
    if(getUser()==undefined||getUser()=="null"||getUser()==null){
      window.location.href = "/register";
    }
    else{
      axiosDeleteWithAuthentication(`profiles/${article.author.username}/follow`).then(res=>{
        setFollowingFlage(res.data.profile.following)
      })
    }
}
  const handelFavorite=()=>{
    if(getUser()==undefined||getUser()=="null"||getUser()==null){
      window.location.href = "/register";
    }
    else{
      console.log(favoriteFlage)
      if(favoriteFlage==false){
        axiosPostWithAuthentication(`articles/${article.slug}/favorite`,{}).then(res=>{
          setFavoriteFlage(res.data.article.favorited)  
          setFavoriteCount(res.data.article.favoritesCount)
          console.log(res.data.article)
        })
      }
      else{
        axiosDeleteWithAuthentication(`articles/${article.slug}/favorite`).then(res=>{
          setFavoriteFlage(res.data.article.favorited)  
          setFavoriteCount(res.data.article.favoritesCount)
          console.log(res.data.article) 
        })
      }
    }
  }
  const deleteHandler=()=>{
    axiosDeleteWithAuthentication(`articles/${slug}`).then(()=>{
      window.location.href='/profile'
    })
  }
  return (
    <Container className={classes.mainContainer} >
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
                action:classes.action
              }}
              action={article.author.username!=logedUser?
              <div>
                  <Button className={classes.followButton} onClick={followingFlage?handelUnFollow:handelFollow}>
                  <AddIcon></AddIcon>{followingFlage?`Unfollow ${article.author.username}`:`Follow ${article.author.username}`}
                  </Button>
                  <span>
                    <Button className={classes.favoriteButton} onClick={handelFavorite}>
                      <FavoriteIcon/>{favoriteFlage?`Unfavorite Article`:`Favorite Article`}{`(${favoriteCount})`}
                    </Button>
                  </span> 
              </div>:
              <div>
                <Button  ><Link className={classes.editButton}to={`/editor/${slug}`}>Edit Article </Link></Button>
                <span><Button className={classes.deleteButton} onClick={deleteHandler}>Delete Article</Button></span> 
              </div>
              }
              title={article.author.username}
              subheader={<Moment format={"MMMM D, YYYY"} date={article.createdAt}/>}
          />
        </Typography>
          <br />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
