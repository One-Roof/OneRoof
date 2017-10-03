import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(BaseLayout);
