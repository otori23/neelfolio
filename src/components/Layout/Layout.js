import React from "react";
import { Helmet } from "react-helmet"
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";
import "animate.css/animate.min.css";

export default ({ classes, children, ...rest }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"/>
        <link href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" rel="stylesheet"/>
        <title>Neelfolio</title>
      </Helmet>
      <Header
        color="transparent"
        brand="Neelfolio"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "dark"
        }}
        {...rest}
      />
      { children }
      <Footer
        content={
          <div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , Neel Pillai
            </div>
          </div>
        }
      />
    </div>
  )
};
