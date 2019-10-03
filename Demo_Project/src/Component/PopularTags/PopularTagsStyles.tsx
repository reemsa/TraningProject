import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(themes => ({
    card: {
      minHeight: "1px",
      maxWidth: 400,
      flex: "0 0 25%",
      paddingLeft: "15px",
      paddingRight: "15px",
      position: "relative",
      backgroundColor: "#f3f3f3"
    },
    title: {
      fontSize: "1rem",
      color: "373a3c",
      fontFamily: "Source Sans Pro",
      lineHeight: "1.5",
      boxSizing: "inherit"
    },
    div: {
      paddingLeft: 100
    }
  }));
  export default useStyles