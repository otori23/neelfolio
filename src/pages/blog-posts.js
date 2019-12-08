import React from "react";
import Layout from "components/Layout/Layout";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";

const useStyles = makeStyles(blogPostsPageStyle);

export default () => { 
  const classes = useStyles()
  return (
    <Layout classes={classes}>
      <BlogPostsPage classes={classes} />
    </Layout>
  )
};
