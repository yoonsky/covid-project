import { Row, Select, Table, Tooltip } from "antd";
import Search from "antd/lib/input/Search";
const { Option } = Select;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../state/index";
import { QuestionCircleOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "연번",
    dataIndex: "order",
    key: "order",
  },
  {
    title: "시도명",
    dataIndex: "sidoNm",
    key: "sidoNm",
  },
  {
    title: "시군구명",
    dataIndex: "sgguNm",
    key: "sgguNm",
  },

  {
    title: "기관명",
    dataIndex: "yadmNm",
    key: "yadmNm",
  },
  {
    title: "전화번호",
    dataIndex: "telno",
    key: "telno",
  },
  {
    title: (
      <Tooltip
        title={
          <>
            <span>
              A 일반 호흡기 환자 진료를 위한 호흡기 전용 외래 설치 운영
            </span>
            <br />
            <span>
              B 호흡기 환자 전용 외래입원 진료가 가능한 선별진료소 운영 병원
            </span>
          </>
        }
      >
        <span>
          유형
          <QuestionCircleOutlined style={{ marginLeft: "2px" }} />
        </span>
      </Tooltip>
    ),
    key: "hospTyTpCd",
    dataIndex: "hospTyTpCd",
  },
];

const Tables = ({ roomData }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  const nextPage = (e) => {
    console.log(e);
    if (pageNumber < e) {
      setPageNumber(pageNumber + 1);
      dispatch(actions.fetchRoomData({ page: e, roomData }));
    }
  };

  const data = [];
  let i = 1;
  roomData.length !== 0 &&
    roomData.forEach((item) => {
      data.push({
        key: i,
        order: i++,
        sidoNm: item.sidoNm._text,
        sgguNm: item.sgguNm._text,
        yadmNm: item.yadmNm._text,
        telno: item.telno._text,
        hospTyTpCd: item.hospTyTpCd._text,
      });
    });
  // console.log(roomData?.items.item);

  return (
    <>
      <Row>
        <Select defaultValue="A0" style={{ width: 240 }} onChange={() => {}}>
          <Option value="A0">국민안심병원</Option>
          <Option value="97">코로나 검사 실시기관</Option>
          <Option value="99">코로나 선별진료소 운영기관</Option>
        </Select>
        <Search
          placeholder="검색어를 입력하세요."
          allowClear
          enterButton="Search"
          size="middle"
          style={{ flex: 1 }}
          onSearch={() => {}}
        />
      </Row>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          position: ["bottomCenter"],
          onChange: nextPage,
        }}
      />
    </>
  );
};

export default Tables;
