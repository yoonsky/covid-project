import { CaretUpOutlined } from "@ant-design/icons";
import { Col, Statistic } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";

const Stat = ({ title, value, increase }) => {
  return (
    <Col
      span={6}
      style={{
        textAlign: "center",
        padding: "8px",
        marginTop: "14px",
      }}
    >
      <Statistic title={title} value={value} />
      <Paragraph>
        {increase} {<CaretUpOutlined />}
      </Paragraph>
    </Col>
  );
};

export default Stat;
