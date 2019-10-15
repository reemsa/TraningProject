import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    title: {
        paddingBottom: "20px",
        paddingTop: "20px",
        paddingRight: "25px",
        color: "#5CB85C",
        borderBottom: "4px solid #5CB85C"
      },
      toolBar: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
      },
      disabledTitle: {
        paddingBottom: "20px",
        paddingTop: "20px",
        paddingRight: "25px",
        color: "#aaa"
      },
      content: {
        paddingLeft: "25px",
        paddingTop: "20px"
      },
      paper: {
          marginLeft: '200px',
          maxWidth: "1000px",
          boxShadow: "none",        
        },
        div:{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          paddingTop:"20px",
        },
        link:{
          color:"#5CB85C"
        },
        linkDiv:{
          marginTop:"20px"
        },
        commentsList:{
          marginLeft:"100px"
        }
  }));
  export default useStyles