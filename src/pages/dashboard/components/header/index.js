import React from "react";
import { withContext } from "../../../../config/contextConfig";
import {BellOutlined} from '@ant-design/icons';

const HeaderDashboard = (props) => {
  return (
    <div className="header__container">
      <div className="header__inner">
        <div id="menu__top__right">
          <p>Dashboard</p>
        </div>

        <div id="menu__top__left">
          <div id='notify'>
            <BellOutlined />
          </div>
          
          <span id="profile">
            <img
              src={require("../../../../assets/images/profile.png").default}
              alt="profile"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default withContext(HeaderDashboard);
