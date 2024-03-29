import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, defaultTheme, darkTheme } from "./utils";
import { SignUpModal, PrimaryButton } from "./components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Defalut Theme
      </button>
      <PrimaryButton
        style={{ margin: "0 16px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        Show modal
      </PrimaryButton>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
};

export default App;
// ReactDOM.render(<App />, document.querySelector("#root"));
