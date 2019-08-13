import * as React from "react";
import * as style from "./index.scss";

const LiveInput = () => {
  const initialState = {
    input: ""
  };

  const [state, setState] = React.useState(initialState);

  const handleChange = (syntEvent: React.ChangeEvent<HTMLInputElement>) => {
    syntEvent.persist();
    setState(prevState => ({ ...prevState, input: syntEvent.target.value }));
    console.log(state.input)
  };

  return (
    <div className={style.liveInputWrapper}>
      <input
        placeholder="start typing..."
        onChange={handleChange}
        value={state.input}
        className={style.liveInput}
        type="text"
      />
    </div>
  );
};

export default LiveInput;
