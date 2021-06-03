import React from "react";
import { withContext } from "../../../../config/contextConfig";

import { Menu, Dropdown, Avatar } from "antd";
const SidebarDashboard = (props) => {
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
      <Menu.Item key="2">
        <p style={{ color: "#fa4f87" }}> Add a business</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      className={[
        "sidebar_dashboard__container ",
        props.value.path === "/"
          ? "signUp"
          : props.value.path === "/signIn"
          ? "signIn"
          : "dashboard",
      ].join("")}
    >
      <div className="sidebar__inner">
        <div id="sidebar__profile">
          <div id="sidebar__profile__right">
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

            <div>
              <p>Clayvant Inc</p>
              <span>Manage account</span>
            </div>

            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomRight"
            >
              <div className="arrow">
                <img
                  src={
                    require("../../../../assets/images/arrow_down.svg").default
                  }
                  alt="arrow_down"
                />
              </div>
            </Dropdown>
          </div>
        </div>

        <div className="sidebar__menu">
          {/* menu list here */}
          <span>
            <a href="#">Invoice</a>
          </span>
          <span>
            <a href="#">Management</a>
          </span>
          <span>
            <a href="#">Security</a>
          </span>
          <span>
            <a href="#">Support</a>
          </span>
        </div>

        <footer className="dashboard__footer">
          <p> Prospa </p>
        </footer>
      </div>
    </div>
  );
};

export default withContext(SidebarDashboard);
