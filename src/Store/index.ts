export interface IStore {
  auth: {
    authKey: string;
  };
}

export interface IAction<T = any, D = any> {
  type: T;
  data: D;
}

export const initialState = {
  auth: {
    authKey: "001"
  }
};
