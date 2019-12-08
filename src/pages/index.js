import React from "react";
import Layout from "components/Layout/Layout";
import LandingPage from "views/LandingPage/LandingPage";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

const useStyles = makeStyles(landingPageStyle);

export default () => {
  const classes = useStyles()
  return (
    <Layout classes={classes}>
      <LandingPage classes={classes} />
    </Layout>
  )
};
