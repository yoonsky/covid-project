import { Row, Select, Table } from "antd";
import Search from "antd/lib/input/Search";
const { Option } = Select;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state/index";
import { Columns } from "../components/Columns";

const Main = () => {
  const { roomData, dataLength, loading } = useSelector((state) => state.room);
  const [selectValue, setSelectValue] = useState("A0");
  const dispatch = useDispatch();

  console.log(dataLength);

  let pageLength = Math.ceil(dataLength / 10);

  console.log(selectValue, "roomData", roomData);

  let data = [];
  let i = 1;

  roomData.forEach((item) => {
    //가져온데이터 배열에 정렬
    data.push({
      key: i++,
      sidoNm: item.sidoNm._text,
      sgguNm: item.sgguNm._text,
      yadmNm: item.yadmNm._text,
      telno: item.telno._text,
      hospTyTpCd: item.hospTyTpCd ? item.hospTyTpCd._text : "-",
    });
  });

  const nextPage = (e) => {
    dispatch(actions.fetchRoomData({ page: e, spclKey: selectValue }));
  };

  const selectOption = (value) => {
    //옵션을 선택했을때
    setSelectValue(value);
    //페이지 초기화
    dispatch(
      actions.fetchRoomData({
        page: 1,
        spclKey: value,
      })
    );
  };

  useEffect(() => {
    //첫 마운트
    setSelectValue("A0");
    dispatch(
      actions.fetchRoomData({
        page: 1,
        spclKey: selectValue,
      })
    );
  }, []);

  return (
    <>
      <Row>
        <Select
          defaultValue="A0"
          style={{ width: 240 }}
          onChange={selectOption}
        >
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
        bordered
        loading={loading}
        columns={Columns}
        dataSource={data}
        pagination={{
          position: ["bottomCenter"],
          onChange: nextPage,
          total: pageLength,
        }}
      />
    </>
  );
};

export default Main;
