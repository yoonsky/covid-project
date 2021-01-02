import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../../common/redux-helper";

// 타입, 액션, 초기값, 리듀서

export const Types = {
  SetValue: "main/SetValue",
  FetchTotalData: "main/FetchTotalData",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchTotalData: ({ today, yesterday }) => ({
    type: Types.FetchTotalData,
    today,
    yesterday,
  }),
};

const INITIAL_STATE = {
  totalData: undefined,
  // 국가 리스트
  // 확진자 수 (당일, 누적)
  // 검사자 수
  // 사망자 수
  // 검사 진행중 수
  // 격리해제 수
  // 치료중 환자 수
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
