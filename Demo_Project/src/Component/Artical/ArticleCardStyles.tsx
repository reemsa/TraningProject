import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 1000,
      boxShadow: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
    },
    avatar: {
      backgroundColor: red[500]
    }
  }));
  export default useStyles