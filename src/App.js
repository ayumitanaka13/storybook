import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { SignUpModal } from "./components";
import { GlobalStyles, darkTheme, defaultTheme } from "./utils";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyles />

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

      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
        }}
      >
        <SignUpModal />
      </div>
    </ThemeProvider>
  );
}

export default App;
