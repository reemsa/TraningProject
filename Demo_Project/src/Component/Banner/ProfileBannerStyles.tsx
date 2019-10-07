import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    banner: {
      textAlign: "center",
      left: "0",
      right: "0",
      position: "absolute",
      height: "200px"
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
      fontSize:" 1.5rem",
      fontWeight:"bold"
    },
    media:{
      borderRadius:"100px",
      width:"100px",
      height:"100px",
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
      backgroundColor:"#f3f3f3",
      border:"1px solid #999",
      color:"#999",
      fontSize:"0.875rem",
      lineHeight:1.25,
      padding:"0.25rem 0.5rem",
      borderRadius:"0.2rem"
    },
    sttingIcon:{
      height:"20px",
      width:"20px",
    }
  }));
  export default useStyles