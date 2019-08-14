import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import App from "components/App";

const appConfig = {
  lang: "en",
  theme: "dark",
  userId: 0
};

const AppContext = React.createContext(appConfig);



class ThemedButton extends React.Component {
  static contextType = AppContext;
  render() {
    return <button name={this.context.theme}>{this.context.lang}</button>;
  }
}

/*
  // <AppContext.Provider
  //   value={{}}
  // >
  //   <App />
  // </AppContext.Provider>,
*/

const RendProp = (props: any) => {
  const context = React.useContext(AppContext);
  const a = 1;
  return <span>{props.render(a)}, _{context.lang}</span>;
};

ReactDOM.render(
  <>
    <AppContext.Provider
      value={{
        lang: "de",
        theme: "light",
        userId: 0
      }}
    >
      <ThemedButton />
    </AppContext.Provider>
    <ThemedButton />
    <RendProp render={(arg: number) => <span>{arg + "q"}</span>} />
    <App />
  </>,

  document.getElementById("app")
);
