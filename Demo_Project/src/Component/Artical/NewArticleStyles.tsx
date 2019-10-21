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
  button: {
    backgroundColor: "#5CB85C",
    color: "#fff",
    textTransform:"none",
    fontSize:"1.25rem",
    "&:hover":{
      backgroundColor: "#008a00", 
    }
  },
  buttonDiv: {
  
  },
  tagsDiv: {
    paddingTop:1,
    paddingBottom:5
  }
}));
export default useStyles;
