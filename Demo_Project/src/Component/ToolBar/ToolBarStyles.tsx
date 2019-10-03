import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    title: {
      paddingBottom: "20px",
      paddingTop: "20px",
      paddingRight: "25px",
      color: "#5CB85C",
      borderBottom: "2px solid #5CB85C"
    },
    toolBar: {
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
    },
    disabledTitle: {
      paddingBottom: "20px",
      paddingTop: "20px",
      paddingRight: "25px",
      color: "#aaa"
    },
    content: {
      paddingLeft: "25px",
      paddingTop: "20px"
    }
  }));
  export default useStyles