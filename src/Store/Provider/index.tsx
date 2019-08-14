import * as React from "react";
import { IStore, IAction } from "../";

interface IProviderProps {
  reducer: React.Reducer<IStore, IAction>;
  initialState: IStore;
  children: React.ReactChild;
}

const StateContext = React.createContext(null);

const StoreProvider = ({ reducer, initialState, children }: IProviderProps) => (
  <StateContext.Provider value={React.useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const getStateAndDispatch = () => React.useContext(StateContext);

export default StoreProvider;
