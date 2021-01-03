import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../../common/redux-helper";

// 타입, 액션, 초기값, 리듀서

export const Types = {
  SetValue: "room/SetValue",
  FetchRoomData: "room/FetchRoomData",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchRoomData: ({ page, spclKey }) => ({
    type: Types.FetchRoomData,
    page,
    spclKey,
  }),
};

const INITIAL_STATE = {
  roomData: [], //모든 데이터
  dataLength: 0, //페이지 수
  loading: true, //로딩값
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
