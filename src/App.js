import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";

// import "antd/dist/antd.min.css";
// import "antd/dist/antd.min.css";
import {
  NavBar,
  HomePage,
  Exchanges,
  News,
  CryptoDetails,
  Cryptocurrencies,
} from "./components";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto Website <br></br>
            All right reserved
          </Typography.Title>
          <Space>
            <Link to={"/"}>Home</Link>
            <Link to={"/news"}>News</Link>
            <Link to={"/exchanges"}>Exchanges</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
