import React from 'react';
import {  Layout, Splitter, theme } from 'antd';
import AppNavBar from './AppNavBar';
import AppFooter from './AppFooter';
import { Container } from 'react-bootstrap';
import THEME from '@/lib/theme';
import AppSider from './AppSider';
const { Content } = Layout;

const FullLayout = ({ children, sider }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={THEME.layout.style}>
      <AppNavBar />
      <Container className='mt-5 mb-5'>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Splitter style={{ height: '100%', boxShadow: 'none' }}>
            <Splitter.Panel defaultSize="40%" min="20%" max="70%">
              {!sider && <AppSider />}
            </Splitter.Panel>
            <Splitter.Panel>
              <Content style={THEME.content.style}>
                {children}
              </Content>
            </Splitter.Panel>
          </Splitter>
        </Layout>
      </Container>
      <AppFooter />
    </Layout>
  );
};
export default FullLayout;