import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  card: {
    width: "60%",
    minWidth:450,
    maxHeight: 180,
    backgroundColor: "#f5f5f5",
    lineHeight: 3,
    fontSize: "1rem",
    fontFamily: "'Source Sans Pro', sans-serif"
  },
  textField: {
    width: "100%",
    height: 80,
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    padding: "15px",
    lineHeight: 3,
    fontSize: "1rem",
    fontFamily: "'Source Sans Pro', sans-serif"
  },
  media: {
    borderRadius: "25px",
    width: "25px",
    height: "25px",
    float: "left",
    margin: "10px",
    lineHeight: 3,
    fontSize: "1rem",
    fontFamily: "'Source Sans Pro', sans-serif"
  },
  div: {
    display: "inline",
    lineHeight: 3,
    fontSize: "1rem",
    fontFamily: "'Source Sans Pro', sans-serif"
  },
  link: {
    color: "#5CB85C",
    marginRight: "20px",
    textDecoration: "none",
    lineHeight: 3,
    fontSize: "1rem",
    fontFamily: "'Source Sans Pro', sans-serif"
  },
  name: {},
  span: {
    float: "right",
    margin: "20px"
  },
  date: {
    color: "#c8c8c8",
    fontSize: "1rem"
  },
  deleteButton: {
    backgroundColor: "#f5f5f5",
    border:"none",
    color:"#999",
    "&:hover":{
      color:"#000",
      cursor:"pointer"
    }
  }
}));
export default useStyles;
