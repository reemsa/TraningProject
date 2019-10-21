import React from "react";
import Banner from "../Component/Banner/Banner";
import {  isUserLoggedIn } from "../network/userUtilte";
interface IProps {
  title: string;
  subTitle:string
}
const BannerPage: React.FC<IProps> = ({ title,subTitle }) => {
  if (!isUserLoggedIn()) {
    return <Banner title={title} subTitle={subTitle}></Banner>;
  }
  return null;
};

export default BannerPage;
