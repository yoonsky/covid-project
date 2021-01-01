import { all, call, put, takeEvery } from "redux-saga/effects";
import { Types, actions } from "./index";
import callApi from "../../../common/api/callApi";

function* fetchTotalData({ date }) {
  const { Success, data } = yield call(callApi, {
    url: "covid",
    data: { date },
  });
  if (Success && data) {
    yield put(actions.setValue("totalData", data));
  }
}

export default function* () {
  yield all([takeEvery(Types.FetchTotalData, fetchTotalData)]);
}
