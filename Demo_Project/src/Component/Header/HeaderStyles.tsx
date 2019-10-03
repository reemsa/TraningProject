import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: "#ffffff",
      maxWidth: "100^%",
      boxShadow: "none"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    abeld: {
      color: "0d0d0d"
    },
    disabeld: {
      color: "#b2aaaa"
    },
    title: {
      flexGrow: 1,
      color: "#5CB85C",
      fontWeight: "bolder",
      fontFamily: "Titillium Web"
    }
  }));
  export default useStyles