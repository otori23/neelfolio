import React from "react";
import Layout from "components/Layout/Layout";
import ContactUsPage from "views/ContactUsPage/ContactUsPage";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default () => {
  const classes = useStyles()
  return (
    <Layout classes={classes}>
      <ContactUsPage classes={classes} />
    </Layout>
  )
};
