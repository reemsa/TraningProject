import MyToolBar from '../Component/ToolBar/ToolBar'
import React, { useEffect, useState } from "react";
import GlobalFeed from "../Component/ToolBar/GlobalFeed";
import TagFeed from "../Component/ToolBar/TagFeed";
import YourFeed from "../Component/ToolBar/YourFeed";
import { connect } from 'react-redux';
import { AppState } from '../store/Store';

interface ToolbarProps {
  tagName: string;
}
interface ConnectedToolbarPage
{
  logedInFlag:boolean
}

const ToolbarPage: React.FC<ToolbarProps&ConnectedToolbarPage> = ({ tagName, logedInFlag }) => {
  const [tagValue, setTagValue] = useState(tagName);
  let defaultFlag=2
  const [flag,setFlag]=useState(defaultFlag)
  let defaultData=<GlobalFeed />
  const [data, setData] = useState(defaultData);
  if (!logedInFlag) {
    defaultData = <GlobalFeed />;
    defaultFlag=2
  }
  else{
    defaultData=<YourFeed />
    defaultFlag=1
  }
  useEffect(() => {
    if (tagName != "" && tagName != null) {
      setFlag(3)
      setData(<TagFeed tagName={tagName} />);
      setTagValue(tagName);
    }
  }, [tagName,logedInFlag]);
  const yourFeedhandelclick = () => {
    setFlag(1)
    setData(<YourFeed />);
    setTagValue("");
  };
  const globalFeedhandelclick = () => {
    setFlag(2)
    setData(<GlobalFeed />);
    setTagValue("");
  };
  const tagFeedhandelclick = () => {
    setFlag(3)
    setData(<TagFeed tagName={tagName} />);
    setTagValue("");
  };
return(
    <MyToolBar tagName={tagValue} logedInFlag={logedInFlag} data={data} styleFlage={flag} handleYourFeed={yourFeedhandelclick} handelGlobalFeed={globalFeedhandelclick} handelTagFeed={tagFeedhandelclick}/>
)
};
const mapStateToProps = (state:AppState) =>
({
  logedInFlag:state.logInReducer.flag
})
export default connect(mapStateToProps)(ToolbarPage)
