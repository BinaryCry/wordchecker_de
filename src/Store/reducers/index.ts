import authReducer from "./auth_reducer";
import { IAction, IStore } from "..";


export default ({auth}: IStore, action: IAction) => ({
  auth: authReducer(auth, action)
})
