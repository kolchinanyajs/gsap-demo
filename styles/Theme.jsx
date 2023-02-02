import { rgba } from "polished";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    primary: "#37b24d",
  },
  breakpoints: {},
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
