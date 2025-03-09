import { on, createReducer } from "@ngrx/store";
import { initialState } from "./user.state";
import { log_in } from "./user.action";


export const userReducer = createReducer(
  initialState,
  on(log_in, (state) => ({
    ...state,
    mobile_number: Number('09351990000'),
  }))
);