import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: "1000px",
      boxShadow: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
    },
    media:{
      borderRadius:"20px",
      width:"50px",
      height:"50px",      
    },
    userName:{
      color:"#5CB85C",
      textDecoration:"none"
    },
    read:{
      color:"gray",
      textDecoration:"none"
    },
    cont:{
      display:"inline"
    },
    tags:{
      float:"right",
      padding:"20px"
    }
  }));
  export default useStyles