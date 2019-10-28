import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./BannerStyles";
interface BannerProps {
  title: string;
  subTitle:string
}
const Banner: React.FC<BannerProps> = ({ title ,subTitle}) => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <div className={classes.banner}>
        <div className={classes.container}>
          <br />
          <Typography className={classes.logo_font} variant="h3" gutterBottom>
            {title.toLowerCase()}
          </Typography>
          <Typography className={classes.para} variant="body2" gutterBottom>
            {subTitle}
          </Typography>
          <br />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
