import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  button: {
    color: "#5CB85C",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    position: "relative",
    float: "left",
    padding: "0.5rem 0.75rem",
    marginLeft: "-1px",
    textDecoration: "none"
  },
  click: {
    color: "#fff",
    backgroundColor: "#5CB85C",
    border: "1px solid #ddd",
    position: "relative",
    float: "left",
    padding: "0.5rem 0.75rem",
    marginLeft: "-1px",
    textDecoration: "underline"
  },
  div: {
    maxWidth: 1000,
    paddingTop: 20,
    paddingLeft: 20,
    position: "relative"
  }
}));
export default useStyles