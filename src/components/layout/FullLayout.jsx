import React from 'react';
import { Layout, Splitter, theme } from 'antd';
import AppNavBar from './AppNavBar';
import AppFooter from './AppFooter';
import { Container, Row, Col } from 'react-bootstrap';
import THEME from '@/lib/theme';
import AppSider from './AppSider';
const { Content } = Layout;

const FullLayout = ({ children, sider }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const containerSyle = {
            padding: '24px',
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }
  return (
    <Layout style={THEME.layout.style}>
      <AppNavBar />
      <Layout>
        {!sider && <AppSider style={containerSyle} />}
        <Container className='mt-4'>
          <Layout style={containerSyle}>
            {children}
          </Layout>
        </Container>

      </Layout>
      <AppFooter />
    </Layout>
  );
};
export default FullLayout;