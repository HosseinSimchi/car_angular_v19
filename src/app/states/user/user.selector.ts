import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

const getUserState = createFeatureSelector<AppState>("user");

export const getUser = createSelector(getUserState, (state: any) => {
  return state;
});
