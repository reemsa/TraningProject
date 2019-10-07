import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    textField: {
      paddingTop:"0.5rem",
      paddingLeft:"1rem",
      paddingRight:"0.5rem",
      width: 500,
      textDecoration:"none",
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
        paddingLeft:370
    }
  }));
export default useStyles  