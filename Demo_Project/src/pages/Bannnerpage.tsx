import React from "react";
import Banner from '../Component/Banner/Banner'
interface IProps {
  title: string;
  token: boolean;
}
const BannerPage:React.FC<IProps> = ({ title,token}) => {
  if (token) {
    return null;
  }
  return (
    <Banner title={title}></Banner>
  );
};

export default BannerPage;