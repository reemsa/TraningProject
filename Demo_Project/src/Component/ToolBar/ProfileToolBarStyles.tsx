import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  title: {
    paddingBottom: "20px",
    paddingTop: "20px",
    paddingRight: "25px",
    color: "#5CB85C",
    borderBottom: "4px solid #5CB85C",
    "&:hover":{
      cursor:"pointer"
    }
  },
  toolBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  },
  disabledTitle: {
    paddingBottom: "20px",
    paddingTop: "20px",
    paddingRight: "25px",
    color: "#aaa",
    "&:hover":{
      cursor:"pointer"
    }
  },
  content: {
    paddingLeft: "25px",
    paddingTop: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "1000px",
    boxShadow: "none"
  },
  div: {
    paddingTop: "150px"
  }
}));
export default useStyles;
