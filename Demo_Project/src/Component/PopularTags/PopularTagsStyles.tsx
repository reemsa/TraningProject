import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(themes => ({
  card: {
    maxWidth: "300px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom:"15px",
    position: "relative",
    backgroundColor: "#f3f3f3",
  },
  title: {
    fontSize: "1rem",
    color: "373a3c",
    fontFamily: "'Source Sans Pro', sans-serif",
    lineHeight: "1.5",
    boxSizing: "inherit"
  },
  div: {
    paddingTop: "30px",
    marginBottom:"30px"
  },
  tagButtonDiv:{
    display: "flex",
    flexDirection: "row",
    minWidth:300,
    //width: 300,
    flexWrap: 'wrap'
  }
}));
export default useStyles;
