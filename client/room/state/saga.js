import { all, call, put, takeEvery } from "redux-saga/effects";
import { Types, actions } from "./index";
import { callApi } from "../../../common/api/callApi";

function* fetchRoomData({ page, spclKey, roomData }) {
  //요청한 페이지가 내가 접근했던 페이지가 아니라면 api요청
  const { Success, data } = yield call(callApi, {
    method: "post",
    url: "/api/room",
    data: { page, spclKey },
  });
  console.log("Success is", Success);
  if (Success && data) {
    const newData = roomData.concat(data.body.items.item);
    const setData = new Set(newData);
    const uniqueArr = [...setData];
    // 중복제거
    yield put(actions.setValue("roomData", uniqueArr));
    //기존데이터에 쌓아주기!
  }
}

export default function* roomSaga() {
  yield all([takeEvery(Types.FetchRoomData, fetchRoomData)]);
}
