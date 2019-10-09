import React from "react";
import Typography from "@material-ui/core/Typography";
import { IoLogoGithub } from "react-icons/io";
import useStyles from "./FooterStyles";
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
              <div className={classes.div}></div>
              <div className={classes.footer}>
      <div className={classes.container}>
        <br />
        <a className={classes.link}
          href="https://github.com/gothinkster/angularjs-realworld-example-app"
          target="_blank"
        >
          <Typography className={classes.logoFont} variant="h6" gutterBottom>
            <IoLogoGithub></IoLogoGithub> Fork on GitHub
          </Typography>
        </a>
        <br />
      </div>
    </div>
    </div>

  );
};

export default Footer;
