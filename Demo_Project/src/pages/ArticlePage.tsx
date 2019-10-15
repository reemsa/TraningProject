import React from 'react';
import ArticleBanner from '../Component/Artical/ArticleBanner';
import { RouteComponentProps } from 'react-router-dom';
import ArticleBody from '../Component/Artical/ArticleBody';
const ArticlePage:React.FC<RouteComponentProps <{slug: string}>>=props=>{
    const slug=props.match.params.slug
    return(<div>
             <ArticleBanner slug={slug}></ArticleBanner>
             <ArticleBody slug={slug}></ArticleBody>
    </div>)

}
export default ArticlePage