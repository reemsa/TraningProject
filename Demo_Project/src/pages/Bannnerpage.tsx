import React from "react";
import Banner from '../Component/Banner/Banner'
import {getUser} from '../network/user'
interface IProps {
  title: string;
}
const BannerPage:React.FC<IProps> = ({ title}) => {
  let user=getUser();
  if (user==null||user=="null") {
    return (
      <Banner title={title}></Banner>
    );
  }
  return null;
};

export default BannerPage;