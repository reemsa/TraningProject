import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(themes => ({
  like: {
    backgroundColor: "transparent",
    color: "#5CB85C",
    border: "solid",
    borderRightColor: "#5CB85C",
    borderLeftColor: "#5CB85C",
    borderTopColor: "#5CB85C",
    borderBottomColor: "#5CB85C",
    fontSize: " 0.875rem"
  },
  onHover: {
    backgroundColor: "#5CB85C",
    color: "#fff",
    border: "solid",
    borderColor: "#5CB85C",
    fontSize: " 0.875rem"
  }
}));
export default useStyles