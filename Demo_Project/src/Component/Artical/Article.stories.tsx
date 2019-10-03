import React from "react";
import { storiesOf } from "@storybook/react";
import ArticleCard from "./ArticleCard";
import NewArticle from './NewArticle'
storiesOf("Article", module)
.add("ArticleCard", () => (<ArticleCard></ArticleCard>))
.add("NewArticle",()=>(<NewArticle></NewArticle>))
