import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  title: {
    paddingBottom: "20px",
    paddingTop: "20px",
    color: "#5CB85C",
    borderBottom: "4px solid #5CB85C"
  },
  toolBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  },
  disabledTitle: {
    paddingBottom: "20px",
    paddingTop: "20px",
    color: "#aaa"
  },
  content: {
    paddingTop: "20px"
  },
  paper: {
    maxWidth: "1000px",
    boxShadow: "none"
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px"
  },
  link: {
    color: "#5CB85C"
  },
  linkDiv: {
    marginTop: "20px"
  },
  commentsList: {
  }
}));
export default useStyles;
