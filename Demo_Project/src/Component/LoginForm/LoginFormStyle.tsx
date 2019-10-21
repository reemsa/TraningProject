import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
    fontFamily: "Titillium Web",
    fontSize: 50
  },
  subTitle: {
    color: "#5CB85C"
  },
  textField: {
    width: "400px"
  },
  signIn: {
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
