import { Dispatch } from "redux";
import { AppStateType } from "./store";

type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>;
type SetMinValueActionType = ReturnType<typeof setMinValueAC>;
type SetErrorActionType = ReturnType<typeof setErrorAC>;

type ActionType =
  | SetMaxValueActionType
  | SetMinValueActionType
  | SetErrorActionType;

const initialState = {
  countStart: 0,
  countMax: 5,
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

// export const incValueTC =
//   () => (dispatch: Dispatch, getState: () => AppStateType) => {
//     let currentValue = getState().counter.value;
//     localStorage.setItem("counterValue", JSON.stringify(currentValue + 1));
//     dispatch(incValueAC());
//   };
//
// export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//   let valueAsString = localStorage.getItem("counterValue");
//   if (valueAsString) {
//     let newValue = JSON.parse(valueAsString);
//     dispatch(setValueFromLocalStorageAC(newValue));
//   }
// };
