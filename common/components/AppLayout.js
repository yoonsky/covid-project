import { Menu } from "antd";
import {
  AreaChartOutlined,
  BellOutlined,
  QrcodeOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div
      style={{
        margin: "0 auto",
        background: "#ababab",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Menu
        onClick={() => {}}
        mode="horizontal"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Menu.Item key="situation" icon={<AreaChartOutlined />}>
          <Link href="/">
            <a>국내/세계현황</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="notice" icon={<BellOutlined />}>
          <Link href="/notice">
            <a>공지사항</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="room" icon={<CheckCircleOutlined />}>
          <Link href="/room">
            <a>선별진료소</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="qr" icon={<QrcodeOutlined />}>
          <Link href="/mypage">
            <a> QR/동선체크</a>
          </Link>
        </Menu.Item>
      </Menu>

      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
