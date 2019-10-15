import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(themes => ({
    button:{
        backgroundColor:"#818a91",
        color:"#fff",
        borderRadius:"30px",
        paddingLeft:"10px",
        paddingRight:"10px", 
        paddingTop:"5px",
        border:"none"
    },
    clearIcon:{
      fontSize:"small" ,
      lineHeight:3 
    },
    clearIconButton:{
        backgroundColor:"#818a91",
        color:"#fff",
        border:"none"
    }
}));
export default useStyles