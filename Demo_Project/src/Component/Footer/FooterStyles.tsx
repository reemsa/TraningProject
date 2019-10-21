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
    color: "#fff",
    fontWeight: "lighter",
    fontSize: "1.5rem"
  },
  div: {
    paddingTop: "100px"
  },
  link: {
    textDecorationColor: "#485563",
    "&:hover": {
      textDecorationColor: "#fff"
    }
  }
}));
export default useStyles;
