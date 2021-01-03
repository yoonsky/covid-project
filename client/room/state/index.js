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
  fetchRoomData: ({ page, roomData }) => ({
    type: Types.FetchRoomData,
    page,
    roomData,
  }),
};

const INITIAL_STATE = {
  roomData: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
