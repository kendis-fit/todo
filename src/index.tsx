import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";

import theme from "./theme";
import App from "./Components/App";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, document.getElementById("root"));