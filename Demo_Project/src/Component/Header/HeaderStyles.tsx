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
      fontSize:"1.5rem",
      fontFamily: "'Titillium Web', sans-serif",
      textDecoration:"none",
      paddingLeft:"75px"
    },
    createIcon:{
      paddingRight:"5px",
      height:"25px",
      width:"25px",
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
      fontSize:"1rem",
      padding:"5px",
      fontFamily:"'Source Sans Pro', sans-serif"
    },
    enabled:{
      color:"black",
      textDecoration:"none",
      fontSize:"1rem",
      padding:"5px" ,
      fontFamily:"'Source Sans Pro', sans-serif"
    },
    button:{
      color:"gray"
    },
    enabledButton:{
      color:"black"
    },
    tabs:{
      paddingRight:"120px"
    }
  }));
  export default useStyles