import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    mainContainer:{
      height: "200px" 
    },
    banner: {
      textAlign: "center",
      left: "0",
      right: "0",
      position: "absolute",
      height: "200px"
    },
    container: {
      color: "#FFF",
      backgroundColor: "#5CB85C"
    },
    logo_font: {
      fontWeight: "bold",
      paddingTop: "20px",
      fontFamily: "Titillium Web",
      fontSize:"3.5rem",
      paddingBottom:"8px"
    },
    para: {
      fontSize:"1.5rem",
      fontWeight:"lighter" 
    }
  }));
  export default useStyles