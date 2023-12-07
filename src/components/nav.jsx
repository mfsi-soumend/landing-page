import React from "react";
import Icon, { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Nav() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <img src="../../public/img/output-onlinepngtools.png" alt="LTILogo" />
        </div>
        <div className="nav-heading">iCodeCAM</div>
      </div>
      <div className="user-bar">
        <div className="greet">Welcome !!</div>
        <div className="user">
          <Button
            type="primary"
            className="login-button"
            icon={<LoginOutlined />}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default Nav;
