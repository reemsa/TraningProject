import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  card: {
    width: "60%",
    minWidth:450,
    maxHeight: 180,
    backgroundColor: "#f5f5f5",
    marginTop: "40px",
  },
  textField: {
    width: "100%",
    minWidth:440,
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    padding: "15px"
  },
  button: {
    float: "right",
    marginTop: "5px",
    marginRight: "5px",
    backgroundColor: "#5CB85C",
    color: "#fff",
    textTransform: "none"
  },
  media: {
    borderRadius: "25px",
    width: "25px",
    height: "25px",
    float: "left",
    margin: "10px"
  },
  div: {
    display: "inline"
  }
});
export default useStyles;
