import {Link, Outlet, useNavigate} from "react-router-dom";
import {Layout, Menu, Breadcrumb} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
import React, {useState} from "react";
import {menu} from "../../router";

function genMenu(menuConfig) {
  return menuConfig.map(menuItem => {
    if (menuItem.children) {
      return <SubMenu
        key={menuItem.id}
        icon={<NotificationOutlined/>}
        title={menuItem.name}
      >
        {genMenu(menuItem.children)}
      </SubMenu>
    } else {
      return <Menu.Item key={menuItem.id} path={menuItem.path}>{menuItem.name}</Menu.Item>
    }
  })
}

function LayoutPage() {
  const navigate = useNavigate()
  const handleSelect = ({item, key, keyPath, selectedKeys, domEvent}) => {
    let {path} = item.props
    navigate(path)
  };
  return (
    <>
      <Layout style={{minHeight: "100vh"}}>
        <Header className="header">
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              onSelect={handleSelect}
              style={{height: "100%", borderRight: 0}}
            >
              {genMenu(menu[0].children)}
            </Menu>
          </Sider>
          <Layout style={{padding: "0 24px 24px"}}>
            <Breadcrumb style={{margin: "16px 0"}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Outlet/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default LayoutPage;
