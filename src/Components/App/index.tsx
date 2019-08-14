import * as React from "react";
import * as style from "./index.scss";
import { IProps } from "./interface";
import LiveInput from "components/LiveInput";
import { getStateAndDispatch } from "../../Store/Provider";
import { SET_AUTH_KEY } from "../../Store/reducers/auth_reducer";

const App = (props: IProps) => {
  const [{ auth }, dispatch] = getStateAndDispatch();

  const handleClick = () => {
    dispatch({
      type: SET_AUTH_KEY,
      data: {
        key: "hash256"
      }
    });
  };

  return (
    <div>
      <h1 className={style.appHeader}>
        {props.header || "App v 1.0"}, auth: {auth.authKey}
      </h1>
      <LiveInput />
      <button onClick={handleClick}>auth action</button>
    </div>
  );
};

export default App;
