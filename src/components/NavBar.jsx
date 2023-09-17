import React from "react";
import { Menu, Typography, Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to={"/"}>Crypto Website</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined></MoneyCollectOutlined>}>
          <Link to={"/exchanges"}>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined></BulbOutlined>}>
          <Link to={"/news"}>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
