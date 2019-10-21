import { createStyles } from "@material-ui/core/styles";
const styles = createStyles({
  title: {
    paddingBottom: "20px",
    paddingTop: "20px",
    paddingRight: "25px",
    color: "#5CB85C",
    borderBottom: "2px solid #5CB85C",
    "&:hover":{
      cursor:"pointer",
      color: "#5CB85C",
    },
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
      cursor:"pointer",
      color: "#5CB85C",
    },
  },
  content: {
    paddingLeft: "25px",
    paddingTop: "20px"
  },
  displayNone: {
    display: "none"
  }
});
export default styles;
