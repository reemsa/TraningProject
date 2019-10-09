import React from "react";
import { storiesOf } from "@storybook/react";
import ArticleCard from "./ArticleCard";
import NewArticle from './NewArticle'
storiesOf("Article", module)
.add("ArticleCard", () => (<ArticleCard userName="" title="" description="" date="" image=""></ArticleCard>))
.add("NewArticle",()=>(<NewArticle></NewArticle>))
