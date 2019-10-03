import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./BannerStyles";
interface IProps {
  appName: string;
  token: boolean;
}
const Banner = ({ appName, token }: IProps) => {
  const classes = useStyles();
  if (token) {
    return null;
  }
  return (
    <Container fixed style={{ height: "200px" }}>
      <div className={classes.banner}>
        <div className={classes.container}>
          <br />
          <Typography className={classes.logo_font} variant="h3" gutterBottom>
            {appName.toLowerCase()}
          </Typography>
          <Typography className={classes.para} variant="h6" gutterBottom>
            A place to share your knowledge.
          </Typography>
          <br />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
