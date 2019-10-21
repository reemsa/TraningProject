import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: "0.5rem",
    marginLeft: "1rem",
    marginRight: "0.5rem",
    width: "100%",
    maxWidth:500,
    textDecoration: "none",
  },
  container: {
    paddingTop:20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  settingButton: {
    backgroundColor: "#5CB85C",
    color: "#fff",
    textTransform:"none",
    lineHeight:2,
    fontSize:"1rem",
    float: "right",
    flexDirection: "row",
    "&:hover":{
      backgroundColor: "#008a00", 
    }
  },
  settingButtonDiv: {
    paddingTop:10,
    paddingBottom:10,
    //paddingRight:"35%"
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1.8rem"
  },
  lineDiv:{
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    width: "50%",
    minWidth:400,
    paddingTop: 20,
  },
  logOutDiv: {
    //paddingLeft:"35%"
  },
  logOutButton: {
    border: "1px solid rgba(1, 0, 0, 0.1)",
    borderColor: "#B85C5C",
    color: "#B85C5C",
    textTransform:"none",
    flex:"left",
    "&:hover":{
      backgroundColor: "#B85C5C", 
      color:"#fff"
    }
  }
}));
export default useStyles;
