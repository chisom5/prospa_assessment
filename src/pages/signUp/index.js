import React, { Component } from "react";
import "../style.scss";
import Sidebar from "../../components/sidebar";
import FormComponent from "../../components/form";
import { withRouter } from "react-router-dom";
import { ConfigContext } from "../../config/contextConfig";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {CSSTransition} from 'react-transition-group';
import { gsap } from "gsap";

class SignUpPage extends Component {
  state = {
    path: null,
    activeStage: 0,
    title: "Create your account",
    description: "A short description about account types",
    openBusinessArr: [
      {
        id: 1,
        title: `I have a registered business/charity with CAC`,
        desc: `As a registered business you'll get`,
        options: [
          { id: 1.1, name: "Account in your business name" },
          {
            id: 1.2,
            name: "Send to and recieve transfers from all Nigerian banks",
          },
          { id: 1.3, name: "Tools for business management" },
        ],
      },
      {
        id: 2,
        title: `My business is not yet registered, I would like to register`,
        desc: `Everything you need to start your business`,
        options: [
          { id: 2.1, name: "Registered business name with CAC" },
          { id: 2.2, name: "Two Identification number" },
          {
            id: 2.3,
            name: "Your account will be automatically opened on completion",
          },
        ],
      },
      {
        id: 3,
        title: `I'm a freelancer I do business in my personal name`,
        desc: ``,
        options: [],
      },
    ],
    businessType: 1,
  };
  componentDidMount() {
    const { pathname } = this.props.location;
    this.setState({
      path: pathname,
    });
  }
  changeActiveStage = () => {
    this.setState({
      activeStage: this.state.activeStage + 1,
      title: "Open a new business account",
      description: "A short description comes here",
    });
  };

  goBack = () => {
    this.setState({
      activeStage: this.state.activeStage - 1,
      title: "Create your account",
      description: "A short description about account types",
    });
  };
  chooseBusiness = (id) => {
    this.setState({
      businessType: id,
    });
  };
  navigateToSignIn = () => {
    this.props.history.push("/signIn");
  };
  changePhoneNum = (val) => {
    this.setState({
      phoneCode: val,
    });
  };
  
  onEnter = (node) => {
    console.log(node, 'here')
    //enter animation
    gsap.from(
      node.children[0].firstElementChild,
      0.6,
      {
        x: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      }
    );
  };
  
   onExit = (node) => {
     console.log(node, 'here')
    //exit animation
    gsap.to(
      node.children[0].firstElementChild,
      0.6,
      {
        x: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2,
        },
      }
    );
  };
  
  render() {
    const { path, phoneCode, activeStage, openBusinessArr, businessType } =
      this.state;
    const { changePhoneNum, changeActiveStage, chooseBusiness } = this;

    return (
      <ConfigContext.Provider
        value={{
          path,
          phoneCode,
          activeStage,
          openBusinessArr,
          businessType,
          changePhoneNum,
          changeActiveStage,
          chooseBusiness,
        }}
      >
        <div className="init__container">
          <Sidebar />

          <section className="main__content">
            <header
              className={[
                "header ",
                this.state.activeStage === 0 ? "mb__header" : null,
              ].join(" ")}
            >
              {this.state.activeStage > 0 && (
                <div onClick={() => this.goBack()} id="arrow_back">
                  <ArrowLeftOutlined />
                </div>
              )}

              <div></div>
              <div>
                <p>
                  Already a member?{" "}
                  <span id="link" onClick={() => this.navigateToSignIn()}>
                    Sign In
                  </span>
                </p>
              </div>
            </header>
            <CSSTransition
              in={true}
              timeout={200}
              classNames="slide"
              unmountOnExit
              onExited={()=> this.onExit()}
              onEnter={()=> this.onEnter()}
            >
              <FormComponent
                description={this.state.description}
                title={this.state.title}
              />
            </CSSTransition>
          </section>
        </div>
      </ConfigContext.Provider>
    );
  }
}

export default withRouter(SignUpPage);
