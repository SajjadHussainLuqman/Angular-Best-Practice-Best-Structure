import { ActionReducerMap, Action, ActionReducer, MetaReducer } from '@ngrx/store';

import { LoginReducerFunction } from "./Login.reducer";
import { UniversityReducerFunction } from "./Universities.reducer";
import { RoleReducerFunction } from "./Roles.reducer";

import * as Models  from '../../Models/index';

export interface IAppState {
    Login : Models.Login[];
    Universities: Models.DropdownValues[];
    Roles : Models.DropdownValues[];
}

export const reducers: ActionReducerMap<IAppState> = {
    Login : LoginReducerFunction,
    Universities : UniversityReducerFunction,
    Roles : RoleReducerFunction
};


export function resetFunctionReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
      switch (action.type) {
          case "Logout":
            console.log("logout action");
           return state = undefined;
      }

      return reducer(state, action);
    }
  }

  export const metaReducers: MetaReducer<any>[] = [resetFunctionReducer];
