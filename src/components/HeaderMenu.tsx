/* eslint-disable jsx-a11y/anchor-is-valid */
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

export const HeaderMenu = () => {
  const menuItems = [
    { label: "Features", key: "features" },
    { label: "Pricing", key: "pricing" },
    { label: "Company", key: "company" },
    { label: "Resources", key: "resources" },
    { label: "Enterprise", key: "enterprise" },
    { label: "Login", key: "login" },
  ];

  const dropdownMenu = (
    <Menu
      items={[
        { label: "Option 1", key: "1" },
        { label: "Option 2", key: "2" },
      ]}
    />
  );

  return (
    <ul className="flex justify-center space-x-8 text-white text-lg">
      {menuItems.map((item) => (
        <li key={item.key}>
          {["features", "company", "resources"].includes(item.key) ? (
            <Dropdown overlay={dropdownMenu} placement="bottomCenter" arrow>
              <a
                href="#"
                className="hover:text-gray-300 transition text-primaryFont font-medium text-md"
              >
                <Space>
                  {item.label}
                  <DownOutlined className="text-xs" />
                </Space>
              </a>
            </Dropdown>
          ) : (
            <a
              href="#"
              className="hover:text-gray-300 transition text-primaryFont font-medium text-md"
            >
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};
