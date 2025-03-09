import { UserState } from "../models/user_info.model";
import { userReducer } from "./user/user.reducer";

export interface AppState {
  user : UserState
}

export const appReducer = {
  user : userReducer
}