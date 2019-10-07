import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    footer: {
      textAlign: "center",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "60px",
      width: "100%",
      fontFamily: "Source Sans Pro",
      color: "#fff",
      fontWeight: "lighter"
    },
    container: {
      backgroundColor: "#485563"
    },
    logoFont: {
      fontFamily: "Source Sans Pro",
      color: "#fff",
      fontWeight: "lighter"
    },
    div:{
      paddingTop:"100px"
    }
  }));
  export default useStyles