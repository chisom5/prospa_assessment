import React, { Component } from "react";
import "../style.scss";
import { Menu, Dropdown, Avatar, Button } from "antd";
import CardItem from "./components/card";
import CardDownItem from "./components/card/cardDown";
import SidebarDashboard from "./components/sidebar";
import HeaderDashboard from "./components/header";
import MyResponsiveLineChart from "./components/chart";
import Cashflow from './components/cashflow';
import {BankOutlined,AntCloudOutlined, SoundOutlined, TransactionOutlined  } from '@ant-design/icons';

import { withRouter } from "react-router-dom";
import { ConfigContext } from "../../config/contextConfig";

class Dashboard extends Component {
  state = {
    path: null,
    cashflow:[
      {
        id:0, 
        name: 'Bank Fees',
        amount: '-N250,000',
        percent: 90,
        icon: <BankOutlined />
      },
      {
        id: 1,
        name: 'Internet',
        amount: '-N250,000',
        percent: 70,
        icon: <AntCloudOutlined />
      },
      {
        id:2,
        name: 'Marketing',
        amount: '-N250,000',
        percent: 40,
        icon: <SoundOutlined />
      },
      {
        id:3,
        name: 'Transfer',
        amount: '-N250,000',
        percent: 20,
        icon: <TransactionOutlined />
      }
    ],
    chartData: [
      {
        id: "line chart",
        color: "hsl(193, 70%, 50%)",
        data: [
          {
            x: "2020-01-01",
            y: 102,
          },
          {
            x: "2020-02-01",
            y: 217,
          },
          {
            x: "2020-03-01",
            y: 248,
          },
          {
            x: "2020-04-01",
            y: 212,
          },
          {
            x: "2020-05-01",
            y: 175,
          },
          {
            x: "2020-06-01",
            y: 153,
          },
          {
            x: "2020-07-01",
            y: 140,
          },
          {
            x: "2020-08-01",
            y: 85,
          },
        ],
      },
    ],
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    this.setState({
      path: pathname,
    });
  }
  toggleMenu = () => {
    document.getElementById("navButton").onclick = function () {
      let navButton = document.getElementById("navButton");
      var className = " " + navButton.className + " ";

      if (~className.indexOf(" close ")) {
        this.className = className.replace(" close ", " ");
        document.getElementsByClassName("nav-header")[0].style.display = "none";
        // document.getElementsByClassName('login-box')[0].style.display = 'none';
      } else {
        this.className += " close";
        document.getElementsByClassName("nav-header")[0].style.display = "flex";
        // document.getElementsByClassName('nav-header')[0].style.flexDirection = 'column';
        // document.getElementsByClassName('login-box')[0].style.display = 'block';
      }
    };
  };

  render() {
    const {path} = this.state;

    const menu = (
      <Menu>
        <Menu.Item key="0">
          <p>Clayvant Inc</p>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <p>Business name 2</p>
        </Menu.Item>
        <Menu.Item key="2">
          <p>Business name 3</p>
        </Menu.Item>
        <Menu.Item key="3">
          <p>Notification</p>
        </Menu.Item>
      </Menu>
    );

    return (
      <ConfigContext.Provider value={{ path }}>
      <div className="init__container db_color">
        {/* for mobile */}
        <header className="nav_header">
          <div className="menu">
            <div id="menu__top">
              <div id="menu__top__right">
                <Avatar
                  style={{
                    backgroundColor: "#201738",
                    verticalAlign: "middle",
                    fontSize: "11px",
                    marginRight: "6px",
                  }}
                  size="small"
                >
                  C
                </Avatar>

                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <div className="arrow">
                    <img
                      src={
                        require("../../assets/images/arrow_down.svg").default
                      }
                      alt="arrow_down"
                    />
                  </div>
                </Dropdown>

                <p>Dashboard</p>
              </div>

              <div id="menu__top__left">
                <span id="profile">
                  <img
                    src={require("../../assets/images/profile.png").default}
                    alt="profile"
                  />
                </span>

                <button
                  type="button"
                  role="button"
                  aria-label="Toggle Navigation"
                  className="lines-button x"
                  id="navButton"
                  onClick={() => this.toggleMenu()}
                >
                  <span className="lines"></span>
                </button>
              </div>
            </div>

            <nav className="nav-header">
              <div className="main-menu">
                <a href="#">Invoice</a>
                <a href="#">Management</a>
                <a href="#">Security</a>
                <a href="#">Support</a>
              </div>
            </nav>
          </div>
        </header>

        {/* for web, sidebar and header */}
        <SidebarDashboard />
        <div className="web__padding">
          <HeaderDashboard />
          {/* content */}
          <div className="dashboard__content">
            <div id="dashboard__content__header">
              <div id="content__header__text">
                <p>Welcome back, Kathy</p>
                <span>
                  Here's what has been happening in the last<span>7 days</span>
                </span>
              </div>
              <div>
                <Button className="form__btn">Add a sub account</Button>
              </div>
            </div>
            {/* row of the cards */}
            <div className="dashboard__content__inner">
              <div className="row row_mb">
                <CardItem
                  title={"Current Account"}
                  subTitle={"Providus bank - 9906533917"}
                  amount={"N814,800.45"}
                />
                <CardItem
                  title={"Saving Account"}
                  subTitle={"Sub account - 12346789"}
                  amount={"N39,342.45"}
                  last={true}
                />
              </div>
              <div className="row">
                <CardDownItem
                  title={"June summary"}
                  width={true}
                  Component={
                    <MyResponsiveLineChart data={this.state.chartData} />
                  }
                />
                <CardDownItem title={"Cash outflow"} last={true}Component={<Cashflow data={this.state.cashflow}/>}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ConfigContext.Provider>
    );
  }
}

export default withRouter(Dashboard);
