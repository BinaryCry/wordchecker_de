import {IAction, IStore } from "../index";

export const SET_AUTH_KEY = "SET_AUTH_KEY";

export default (auth: IStore["auth"], action: IAction<string, { key: string }>) => {
  switch (action.type) {
    case SET_AUTH_KEY: {
      return {
        ...auth,
        authKey: action.data.key
      };
    }
    default:
      return auth;
  }
};
