import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  banner: {
    textAlign: "center",
    left: "0",
    right: "0",
    position: "absolute",
  },
  container: {
    backgroundColor: "#f3f3f3",
    maxHeight: "250px",
  },
  logo_font: {
    fontWeight: "bolder",
   // paddingTop: "5px",
    fontFamily: "Titillium Web",
    textAlign: "center"
  },
  para: {
    fontSize: " 1.4rem",
    fontWeight: "bold"
  },
  media: {
    borderRadius: "100px",
    width: "100px",
    height: "100px",
    //marginBottom: 1
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: "10%",
    paddingBottom: "20px"
  },
  editButton: {
    backgroundColor: "#f3f3f3",
    border: "1px solid #ccc",
    color: "#aaa",
    fontSize: "0.875rem",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.2rem",
    "&:hover":{
      backgroundColor: "#ccc", 
      color:"#fff",
      cursor:"pointer"
    }
  },
  sttingIcon: {
    height: "15px",
    width: "15px",
  },
  bio: {
    color: "#aaa",
  },
  mainContainer:{
    height: "200px" 
  }
}));
export default useStyles;
