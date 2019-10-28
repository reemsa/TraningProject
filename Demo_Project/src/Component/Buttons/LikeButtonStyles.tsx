import { makeStyles } from "@material-ui/styles";
import { width } from "@material-ui/system";
const useStyles = makeStyles(themes => ({
  notFavoritedButton: {
    backgroundColor: "transparent",
    color: "#5CB85C",
    border: "1px solid #5CB85C",
    fontSize: " 0.875rem",
    lineHeight:1,
  },
  favoritedButton: {
    backgroundColor: "#5CB85C",
    color: "white",
    border: "solid",
    borderColor: "#5CB85C",
    fontSize: " 0.875rem",
  }
}));
export default useStyles;
