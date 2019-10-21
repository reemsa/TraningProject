import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#fff",
    boxShadow: "none",
    //display:"inline",

  },
  menuButton: {
    fontSize:"1rem"
  },
  title: {
    flexGrow: 1,
    color: "#5CB85C",
    fontSize: "1.5rem",
    fontFamily: "'Titillium Web', sans-serif",
    textDecoration: "none",
   // flex:"left"
  },
  createIcon: {
    height: "25px",
    width: "25px",
    color: "#5CB85C"
  },
  media: {
    borderRadius: "20px",
    width: "30px",
    height: "20px"
  },
  link: {
    color: "gray",
    textDecoration: "none",
    fontSize: "1rem",
    fontFamily: "'Source Sans Pro', sans-serif",
    padding:5
  },
  enabled: {
    color: "black",
    textDecoration: "none",
    fontSize: "1rem",
    fontFamily: "'Source Sans Pro', sans-serif",
    padding:5
  },
  button: {
    color: "gray",
    textTransform:"none"
  },
  enabledButton: {
    color: "black",
    textTransform:"none"
  },
  tabs: {
    minWidth:380
    //flex:"right",
  },
  userName:{
    color:"gray"
  },
  userNameOn:{
    color:"black"
  }
}));
export default useStyles;
