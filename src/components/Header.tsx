import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import MobileMenu from "./MobileMenu";
import { AppLogo } from "./AppLogo";
import { HeaderMenu } from "./HeaderMenu";
import TicketBar from "./TickerBar";

const { Header } = Layout;

const AppHeader: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <Header className="bg-primary h-header text-white py-2 shadow-md flex flex-col align-middle">
      <div className="container mx-auto flex justify-between items-center ">
        <AppLogo />
        <div className="hidden md:flex space-x-6">
          <HeaderMenu />
        </div>
        <div className="header-buttons hidden md:flex">
          <Button
            color="default"
            variant="solid"
            ghost={false}
            className="!bg-secondary text-white hover:bg-secondary mr-3"
          >
            Create Launches
          </Button>
          <Button variant="solid" ghost={true}>
            Discover Landscape
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined />}
            className="md:hidden text-white"
            onClick={showDrawer}
          />
        </div>
      </div>
      <div className="w-full mx-auto flex justify-between items-center">
        <TicketBar />
      </div>
      <Drawer
        placement="left"
        onClose={closeDrawer}
        visible={drawerVisible}
        className="md:hidden !bg-primary"
        size="large"
        extra={
          <Space className="">
            <div className="flex justify-between">
              <div className="close-icon text-white"></div>
            </div>
            <div className="w-full mx-auto flex justify-between items-center ">
              <TicketBar />
            </div>
          </Space>
        }
      >
        <MobileMenu closeDrawer={closeDrawer} />
      </Drawer>
    </Header>
  );
};

export default AppHeader;
