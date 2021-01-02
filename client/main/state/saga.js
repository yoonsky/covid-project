import { all, call, put, takeEvery } from "redux-saga/effects";
import { Types, actions } from "./index";
import { callApi } from "../../../common/api/callApi";

function* fetchTotalData({ today, yesterday }) {
  const { Success, data } = yield call(callApi, {
    method: "post",
    url: "/covid",
    data: { today, yesterday },
  });
  console.log("Success is", Success);
  if (Success && data) {
    yield put(actions.setValue("totalData", data.body.items));
  }
}

export default function* () {
  yield all([takeEvery(Types.FetchTotalData, fetchTotalData)]);
}
