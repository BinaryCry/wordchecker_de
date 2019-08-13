import * as React from "react";
import * as style from "./index.scss";
import { IProps } from "./interface";
import LiveInput from "components/LiveInput";

const App = (props: IProps) => {
  return (
    <div>
      <h1 className={style.appHeader}>{props.header || "App v 1.0"}</h1>
      <LiveInput />
    </div>
  );
};

export default App;
