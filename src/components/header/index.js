import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined, UserAddOutlined } from "@ant-design/icons";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__inner">
        <p id='title'>Trending Repos</p>

        <div className="header__inner_search_container">
          
        </div>

      </div>
    </header>
  );
};

export default Header;
