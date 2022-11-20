import { start } from "./set-reducer";

type IncValueActionType = ReturnType<typeof incValueAC>;
type ResetValueActionType = ReturnType<typeof resetValueAC>;

type ActionType = IncValueActionType | ResetValueActionType;

const initialState = {
  value: JSON.parse(start),
};

type InitialStateType = typeof initialState;

export const counterReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "INC-VALUE":
      return {
        ...state,
        value: state.value + 1,
      };
    case "RESET-VALUE":
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export const incValueAC = () => ({ type: "INC-VALUE" } as const);

export const resetValueAC = (value: number) =>
  ({ type: "RESET-VALUE", value } as const);
