import React, { lazy, Suspense, Component } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Spin,Result, Button } from "antd";

// const SignUp = lazy(()=> import('../pages/signUp'));
// const SignIn = lazy(() => import("../pages/signin"));
// const Dashboard = lazy(() => import("../pages/dashboard"));

import SignUp from "../pages/signUp";
import SignIn from "../pages/signin";
import Dashboardcomponent from '../pages/dashboard';

import {LoadingOutlined} from '@ant-design/icons';
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

import "./App.scss";

const FourZeroFour = () => (
  <div
    style={{
      background: "#e5eff1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    }}
  >
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  </div>
);

const PageRoute = [
  { path: "/", Component: SignUp, name: "sigup" },
  { path: "/signIn", Component: SignIn, name: "signin" },
  // { path: "/signIn", Component: SignIn, name: "signin" },

  { path: "/dashboard", Component: Dashboardcomponent, name: "dashboard" },
  { path: "*" },
];

const LoadingMessage = () => (
  <div
    style={{
      background: "#e5eff1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    }}
  >
    <div className="spin">
      <Spin
        size="small"
        indicator={
          <LoadingOutlined style={{ fontSize: 24, color: "#00A3A1" }} spin />
        }
      />
    </div>
  </div>
);

const onEnter = (node) => {
  //enter animation
  gsap.from(
    [node.children[0].firstElementChild, node.children[0].lastElementChild],
    0.6,
    {
      y: 30,
      delay: 0.6,
      ease: "power3.InOut",
      opacity: 0,
      stagger: {
        amount: 0.6,
      },
    }
  );
};

const onExit = (node) => {
  //exit animation
  gsap.to(
    [node.children[0].firstElementChild, node.children[0].lastElementChild],
    0.6,
    {
      y: -30,
      ease: "power3.InOut",
      stagger: {
        amount: 0.2,
      },
    }
  );
};

class Main extends Component {
  state= {
    location: null
  }
  
  render() {
    const {location} = this.props;

    return (
      <Router basename="/">
        <Suspense fallback={<LoadingMessage />}>
        <Switch location={location}>
          {/* <div className="main_page"> */}
            {PageRoute.map(({ path, Component, name }, i) => {
              if (path !== "*") {
                return (
                  <Route key={name} exact path={path} >
                    {({ match }) => (
                      <CSSTransition
                        in={match != null}
                        timeout={200}
                        classNames="page"
                        unmountOnExit
                        appear
                        onExit={onExit}
                        onEntering={onEnter}
                      >
                        <div className="page">
                          <Component />
                        </div>
                      </CSSTransition>
                    )}
                  </Route>
                );
              } else if(path === '*') {
                return (
                  <Route key={i} path='*'>
                      <CSSTransition
                        in={true}
                        timeout={200}
                        classNames="page"
                        unmountOnExit
                        onExit={onExit}
                        onEntering={onEnter}
                      >
                        <div className="page">
                          <FourZeroFour />
                        </div>
                      </CSSTransition>
                  </Route>
                );
              }
            })}
          {/* </div> */}
        </Switch>
        </Suspense>
      </Router>
    );
  }
}
export default Main;
