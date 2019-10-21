import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";
import ProfileBanner from "./ProfileBanner";
storiesOf("Banner", module)
  .add("Banner", () => <Banner title={"conduit"}></Banner>)
  .add("ProfileBanner", () => <ProfileBanner image="" userName="" bio=""></ProfileBanner>);
