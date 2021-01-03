import React from "react";
import Tables from "../components/Tables";
import { useDispatch, useSelector } from "react-redux";
import { actions, Types } from "../state/index";
import { useEffect } from "react";

const Main = () => {
  const dispatch = useDispatch();
  const { roomData } = useSelector((state) => state.room);

  console.log(roomData);

  useEffect(() => {
    dispatch(actions.fetchRoomData({ page: 1, roomData }));

    //페이지 및 코드의 기본값은 1과 A0로 설정
  }, []);

  return (
    <>
      {/* 검사소 리스트 */}
      <Tables roomData={roomData} />
    </>
  );
};

export default Main;
