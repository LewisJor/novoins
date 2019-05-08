import React, { Component } from "react";

import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link id="myHeader" to="/">
                Novo Insurance
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/insurance">
                <h6>Insurance Carriers</h6>
              </Link>
              <Link to="/requestForm">
                <h6>Request Information</h6>
              </Link>
              <Link to="/contact">
                <h6>About Us</h6>
              </Link>
              <div
                style={{ marginTop: "45px" }}
                id="google_translate_element"
              />
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link id="myHeaderDrawer" to="/">
                Novo Insurance
              </Link>
            }
          >
            <Navigation>
              <Link to="/insurance">Insurance Carriers</Link>
              <Link to="/requestForm">Request Information</Link>
              <Link to="/contact">About Us</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
