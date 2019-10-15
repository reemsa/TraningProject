import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    banner: {
      textAlign: "center",
      left: "0",
      right: "0",
      position: "absolute",
      height: "20px"
    },
    container: {
      backgroundColor: "#f3f3f3"
    },
    logo_font: {
      fontWeight: "bolder",
      paddingTop: "20px",
      fontFamily: "Titillium Web",
      textAlign:"center"
    },
    para: {
      fontSize:" 1.4rem",
      fontWeight:"bold"
    },
    media:{
      borderRadius:"100px",
      width:"80px",
      height:"80px",
      marginBottom:"1rem",
      
    },
    div:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingRight:"100px",
      paddingBottom:"20px",
    },
    editButton:{
      backgroundColor:"#fff",
      border:"1px solid #ccc",
      color:"#373a3c",
      fontSize:"0.875rem",
      padding:"0.25rem 0.5rem",
      borderRadius:"0.2rem"
    },
    sttingIcon:{
      height:"20px",
      width:"20px",
    },
    bio:{
      color:"gray"
    }
  }));
  export default useStyles