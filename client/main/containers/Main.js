import { Col, Row } from "antd";
import Stat from "../components/statistic";
import React from "react";
import { useSelector } from "react-redux";

const colors = {
  red: "#EE2222",
  orange: "#EE6022",
  blue: "#2258EE",
  purple: "#330D71",
};

const Main = () => {
  const { totalData } = useSelector((state) => state.main);

  const domesticList = [
    {
      title: "확진환자",
      value: totalData[0].decideCnt._text,
      increase: totalData[0].decideCnt._text - totalData[1].decideCnt._text,
      color: colors.red,
    },
    {
      title: "검사진행",
      value: totalData[0].examCnt._text,
      increase: totalData[0].examCnt._text - totalData[1].examCnt._text,
      color: colors.orange,
    },
    {
      title: "격리해제",
      value: totalData[0].clearCnt._text,
      increase: totalData[0].clearCnt._text - totalData[1].clearCnt._text,
      color: colors.blue,
    },
    {
      title: "사망자",
      value: totalData[0].deathCnt._text,
      increase: totalData[0].deathCnt._text - totalData[1].deathCnt._text,
      color: colors.purple,
    },
  ];
  const overseasList = [
    { title: "확진환자", value: 83963761, increase: 539326, color: colors.red },
    { title: "사망자", value: 1827538, increase: 9424, color: colors.purple },
    { title: "발생국가·영토", value: 220, increase: "-", color: "#000" },
  ];

  return (
    <Col style={{ border: "1px solid #e9e9e9" }}>
      <Row justify="space-around" style={{ margin: "10px 0", width: "100%" }}>
        {domesticList.map((item) => (
          <Stat
            key={item.title}
            title={item.title}
            value={item.value}
            increase={item.increase}
            color={item.color}
          />
        ))}
      </Row>
      <Row justify="space-around" style={{ margin: "10px 0", width: "100%" }}>
        {overseasList.map((item) => (
          <Stat
            key={item.title}
            title={item.title}
            value={item.value}
            increase={item.increase}
            color={item.color}
          />
        ))}
      </Row>
    </Col>
  );
};

export default Main;
