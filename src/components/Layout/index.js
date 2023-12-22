import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import { Layout, Menu, Button } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const LayOut = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed} className={styles.Sider}>
        <div className="demo-logo-vertical" />
        <Menu className= {styles.Sider} mode='inline'>
            <MenuItem><Link to="/order">Order</Link></MenuItem>
            <MenuItem><Link to="/Product">Product</Link></MenuItem>
            <MenuItem><Link to="/create">Create</Link></MenuItem>
        </Menu>
      </Sider>
      <Layout className={styles.Content}>
        <Header className={styles.Header}
          style={{
            padding: 0,
            backgroundColor: 'white',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            //background: colorBgContainer,
          }}
        >
        {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayOut;