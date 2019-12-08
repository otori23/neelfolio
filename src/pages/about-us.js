import React from "react";
import Layout from "components/Layout/Layout";
import AboutUsPage from "views/AboutUsPage/AboutUsPage";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default () => {
  const classes = useStyles()
  return (
    <Layout classes={classes}>
      <AboutUsPage classes={classes} />
    </Layout>
  )
};
