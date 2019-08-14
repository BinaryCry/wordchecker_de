import * as React from "react";
import * as style from "./index.scss";
import { IState } from "./interface";
import axios from "axios";

const LiveInput = () => {
  const wiki = "https://de.wiktionary.org/w/api.php";

  const initialState: IState = {
    input: "",
    wikiOpenSearchResult: []
  };

  const [state, setState] = React.useState(initialState);

  const getOpenSearchResult = (searchString: string) => {
    console.log(searchString);
    if (searchString.length !== 0) {
      axios
        .get(wiki, {
          params: {
            action: "opensearch",
            search: searchString
          }
        })
        .then(result => {
          console.log(result);
        });
    }
  };

  const handleChange = (syntEvent: React.ChangeEvent<HTMLInputElement>) => {
    console.log(syntEvent.target.value);
    syntEvent.persist();
    setState(prevState => ({ ...prevState, input: syntEvent.target.value }));
    // getOpenSearchResult(syntEvent.target.value);
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
      <p>{state.input}</p>
    </div>
  );
};

export default LiveInput;
