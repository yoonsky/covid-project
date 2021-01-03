import { all, call, put, takeEvery } from "redux-saga/effects";
import { Types, actions } from "./index";
import { callApi } from "../../../common/api/callApi";

function* fetchRoomData() {
  const { Success, data } = yield call(callApi, {
    method: "post",
    url: "/api/room",
  });
  console.log("Success is", Success);
  if (Success && data) {
    yield put(actions.setValue("roomData", data.body));
  }
}

export default function* roomSaga() {
  yield all([takeEvery(Types.FetchRoomData, fetchRoomData)]);
}
