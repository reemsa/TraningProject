import React from "react";
import { storiesOf } from "@storybook/react";
import TagButton from "./TagButton";
import LikeButton from "./LikeButton";
storiesOf("Button", module)
  .add("TagButton", () => <TagButton name="butt"></TagButton>)
  .add("LikeButton", () => <LikeButton number={0}></LikeButton>);
