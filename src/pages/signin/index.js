import React, { Component } from "react";
import "../style.scss";
import Sidebar from "../../components/sidebar";
import FormComponent from "../../components/form";
import { withRouter } from "react-router-dom";
import { ConfigContext } from "../../config/contextConfig";

class SignInPage extends Component {
  state = {
    path: null,
  };
  componentDidMount() {
    const { pathname } = this.props.location;
    this.setState({
      path: pathname,
    });
  }
  navigateToSignIn = () => {
    this.props.history.push("/");
  };
  render() {
    const { path } = this.state;
    return (
      <ConfigContext.Provider value={{ path }}>
        <div className="init__container">
          <Sidebar />

          <section className="main__content">
            <header className="header mb__header">
              <div></div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span id="link" onClick={() => this.navigateToSignIn()}>
                    Sign Up
                  </span>
                </p>
              </div>
            </header>
            <FormComponent
              description={
                "An account, with powerful, personalised tools all in one place"
              }
              title={"Welcome back to Prospa"}
            />
          </section>
        </div>
      </ConfigContext.Provider>
    );
  }
}

export default withRouter(SignInPage);
