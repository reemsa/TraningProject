import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(themes => ({
  button:{
    backgroundColor: "transparent",
    color: "#5CB85C",
    border: "solid",
    borderColor:"#5CB85C",
    fontSize: " 0.875rem",
    '&:hover':{
      backgroundColor: "#5CB85C",
      color: "#fff",
      border: "solid",
      borderColor: "#5CB85C",
      fontSize: " 0.875rem"
    },
    '&:focus':{
      backgroundColor: "#5CB85C",
      color: "#fff",
      border: "solid",
      borderColor: "#5CB85C",
      fontSize: " 0.875rem"
    }
  }
}));
export default useStyles