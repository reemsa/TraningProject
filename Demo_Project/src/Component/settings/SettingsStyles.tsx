import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    textField: {
      paddingTop:"0.5rem",
      paddingLeft:"1rem",
      paddingRight:"0.5rem",
      width: 500,
      textDecoration:"none",
      //border:"1px solid rgba(0, 0, 0, 0.15)",
    },
    div:{
        padding:"0.75rem 1.5rem",
    },
    container:{
        paddingLeft:500
    },
    button:{
        backgroundColor:"#5CB85C",
        color:"#fff",
    },
    buttonDiv:{
        paddingLeft:370,
    },
    text:{
        paddingLeft:150,
        fontSize:"2.5rem"
    },
    logOutDiv:{
        borderTop:"1px solid rgba(0, 0, 0, 0.1)",
        maxWidth:540,
        paddingTop:20
    },
    logOutButton:{
        border:"1px solid rgba(1, 0, 0, 0.1)",
        borderColor:"#B85C5C",
        color:"#B85C5C"
    }
  }));
export default useStyles  