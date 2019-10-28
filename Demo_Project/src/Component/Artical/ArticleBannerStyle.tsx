import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "200px"
  },
  banner: {
    left: "0",
    right: "0",
    position: "absolute",
  },
  container: {
    color: "#FFF",
    backgroundColor: "#333",
    paddingLeft: "10%",
    marginLeft: "auto",
    maxHeight: "200px"
  },
  pos: {
    marginBottom: 10,
    fontSize: 14,
    color: "#FFF"
  },
  avatar: {
    borderRadius: "32px",
    width: "32px",
    height: "32px"
  },
  media: {
    borderRadius: "32px",
    width: "32px",
    height: "32px"
  },
  logo_font: {
    fontWeight: 600,
    paddingTop: "20px",
    fontFamily: "inherit",
    fontSize: "2.5rem",
    paddingBottom: "8px",
    paddingLeft: "12px"
  },
  para: {
    fontSize: "1.5rem",
    fontWeight: "lighter"
  },
  subheader: {
    color: "#bbb",
    fontSize: "0.8rem"
  },
  action: {
    paddingRight: "60%",
  },
  followButton: {
    backgroundColor: "#f3f3f3",
    border: "1px solid #999",
    color: "#999",
    fontSize: "0.875rem",
    lineHeight: 1.25,
    borderRadius: "0.2rem",
    textAlign: "center",
    textTransform: "none"
  },
  favoriteButton: {
    backgroundColor: "#333",
    border: "1px solid #5CB85C",
    color: "#5CB85C",
    fontSize: "0.875rem",
    lineHeight: 1.25,
    borderRadius: "0.2rem",
    textAlign: "center",
    textTransform: "none"
  },
  deleteButton: {
    border:"1px solid #B85C5C",
    color: "#B85C5C",
    textTransform: "none",
    fontSize:"0.875rem",
    "&:hover":{
      backgroundColor:"#B85C5C",
      color:"#fff"
    },
  },
  link:{
    border:"1px soild #ccc",
    textDecoration: "none",
    color: "#ccc",
    "&:hover":{
      backgroundColor:"#ccc",
      color:"#fff"
    }
  },
  span:{
    padding:5
  },
  editButton: {
    border:"1px solid #ccc",
    color: "#ccc",
    textTransform: "none",
    fontSize:"0.875rem",
    "&:hover":{
      backgroundColor:"#ccc",
      color:"#fff"
    },
  },
  userName: {
    color: "#fff",
    textTransform: "none",
    textDecoration: "none"
  }
}));
export default useStyles;
