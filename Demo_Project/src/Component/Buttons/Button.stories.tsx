import React from "react";
import { storiesOf } from "@storybook/react";
import TagButton from "./TagButton";
import LikeButton from "./LikeButton";
import EnterdTag from "./EnterdTag";
const handler=(TagButton:string)=>{

}
const clickHandler=(tagValue:string)=>{
  alert(tagValue)
}
storiesOf("Button", module)
  .add("TagButton", () => <TagButton name="butt" onClick={handler}></TagButton>)
  .add("LikeButton", () => <LikeButton number={0}></LikeButton>)
  .add("enterdButon1",()=><EnterdTag onClickHandler={clickHandler} data={"cfff"}></EnterdTag>)
  .add("enterdButon2",()=><EnterdTag onClickHandler={clickHandler} data={"fhf"}></EnterdTag>)
