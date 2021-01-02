import { Row } from "antd";
import Stat from "../components/statistic";
import React from "react";

const Main = () => {
  const itemList = [
    { title: "확진환자", value: 62593, increase: 824 },
    { title: "검사중", value: 179347, increase: 2460 },
    { title: "격리해제", value: 43593, increase: 624 },
    { title: "사망자", value: 993, increase: 24 },
  ];

  return (
    <Row>
      {itemList.map((item) => (
        <Stat
          key={item.title}
          title={item.title}
          value={item.value}
          increase={item.increase}
        />
      ))}
    </Row>
  );
};

export default Main;
