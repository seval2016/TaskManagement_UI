import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0c071b",
    },
    test: {
      primary: "#fff",
    },
    primary: {
      main: "rgba(215,106,255,0.507)",
    },
  },
  typography: {
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New'",
  },
});

export default darkTheme;
