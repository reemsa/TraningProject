import React from "react";
import { storiesOf } from "@storybook/react";
import MyToolbar from "./ToolBar";
import ArticleCard from "../Artical/ArticleCard";
storiesOf("ToolBar", module).add("ToolBar", () => (
  <MyToolbar
  tagName={"butt"}
  ></MyToolbar>
));
