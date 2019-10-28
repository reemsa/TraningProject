import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
    fontFamily: "Titillium Web",
    fontSize: 50
  },
  subTitle: {
    color: "#5CB85C"
  },
  textField: {
    width: "400px"
  },
  signUp: {
    backgroundColor: "#5CB85C",
    color: "white",
    width: "100px",
    height: "50px"
  },
  error: {
    color: "red"
  },
  typography: {
    padding: theme.spacing(2)
  }
}));
export default useStyles;
