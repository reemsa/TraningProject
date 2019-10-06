import React from "react";
import { storiesOf } from "@storybook/react";
import ToolBar from "./ToolBar";
import ArticleCard from "../Artical/ArticleCard";
storiesOf("ToolBar", module).add("ToolBar", () => <ToolBar propsdata={<ArticleCard  userName= "reem" title= "it is about good person"  articleName="reem article" date="September 14, 2016"></ArticleCard>}></ToolBar>);
