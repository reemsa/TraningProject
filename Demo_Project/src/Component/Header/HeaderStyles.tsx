import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: "#ffffff",
      boxShadow: "none"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      color: "#5CB85C",
      fontWeight: "bolder",
      fontFamily: "Titillium Web",
      textDecoration:"none"
    },
    createIcon:{
      height:"20px",
      width:"20px",
      color:"#5CB85C"
    },
    media:{
      borderRadius:"20px",
      width:"20px",
      height:"20px",      
    },
    link:{
      color:"gray",
      textDecoration:"none",
      fontSize:"1.25rem",
      padding:"5px"
    },
    abled:{
      color:"black",
      textDecoration:"none",
      fontSize:"1.25rem",
      padding:"5px" 
    },
  }));
  export default useStyles