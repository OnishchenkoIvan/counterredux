import { Dispatch } from "redux";

type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>;
type SetMinValueActionType = ReturnType<typeof setMinValueAC>;
type SetErrorActionType = ReturnType<typeof setErrorAC>;

type ActionType =
  | SetMaxValueActionType
  | SetMinValueActionType
  | SetErrorActionType;

export const start = localStorage.getItem("startValue") || "0";
const max = localStorage.getItem("maxValue") || "5";

const initialState = {
  countStart: JSON.parse(start),
  countMax: JSON.parse(max),
  error: "",
};

type InitialStateType = typeof initialState;

export const setReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "SET-MAX-VALUE":
      return {
        ...state,
        countMax: action.value,
      };
    case "SET-MIN-VALUE":
      return {
        ...state,
        countStart: action.value,
      };
    case "SET-ERROR":
      return {
        ...state,
        error: action.value,
      };
    default:
      return state;
  }
};

export const setMaxValueAC = (value: number) =>
  ({ type: "SET-MAX-VALUE", value } as const);

export const setMinValueAC = (value: number) =>
  ({ type: "SET-MIN-VALUE", value } as const);

export const setErrorAC = (value: string) =>
  ({ type: "SET-ERROR", value } as const);

export const setMaxValueTC = (value: number) => (dispatch: Dispatch) => {
  dispatch(setMaxValueAC(value));
};
