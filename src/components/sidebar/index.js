import React from "react";
import {withContext} from '../../config/contextConfig';

const Sidebar = (props) => {
  return (
    <div
      className={[
        "sidebar__container ",
        props.value.path === "/"
          ? "signUp"
          : props.value.path === "/signIn"
          ? "signIn"
          : "dashboard",
      ].join("")}
    >
      <div className="sidebar__inner">
        <h3>Prospa</h3>

        <div id="sidebar__progressBar"></div>

        <div className="sidebar__text">
          <h4>Create Multiple</h4>
          <p>Sub-account</p>
          <p className="description">
            Organize your business finances easily with multiple accounts, No
            limits!
          </p>
        </div>

        <div id="bg__image__container">
          <div id="img__vault"></div>
          <div id="img__coins__1"></div>
          <div id="img__coins__2"></div>
          <div id="img__coins__3"></div>
          <div id="img__coins__4"></div>
        </div>
      <footer className='footer'>
          <p> (c)2020 Prospa Inc</p>
      </footer>
      </div>
    </div>
  );
};

export default withContext(Sidebar);
