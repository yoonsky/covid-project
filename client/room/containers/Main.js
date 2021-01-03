import { Row, Select, Table } from "antd";
import Search from "antd/lib/input/Search";
const { Option } = Select;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state/index";
import { Columns } from "../components/Columns";

const Main = () => {
  const { roomData } = useSelector((state) => state.room);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectValue, setSelectValue] = useState("A0");
  const dispatch = useDispatch();

  const data = [];
  let i = 1;
  roomData.length !== 0 &&
    roomData.forEach((item) => {
      //가져온데이터 배열에 정렬
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

  console.log(data);

  const nextPage = (e) => {
    //페이지네이션 함수
    console.log(e);
    if (pageNumber < e) {
      setPageNumber(pageNumber + 1);
      dispatch(
        actions.fetchRoomData({ page: e, spclKey: selectValue, roomData })
      );
    }
  };

  const selectOption = (value) => {
    setSelectValue(value);
  };

  useEffect(() => {
    dispatch(
      actions.fetchRoomData({ page: 1, spclKey: selectValue, roomData })
    );
    //페이지 및 코드의 기본값은 1과 A0로 설정
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
        columns={Columns}
        dataSource={data}
        pagination={{
          position: ["bottomCenter"],
          onChange: nextPage,
        }}
      />
    </>
  );
};

export default Main;
