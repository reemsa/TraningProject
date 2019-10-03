import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";
storiesOf("Banner", module).add("Banner", () => (
  <Banner token={false} appName={"conduit"}></Banner>
));
