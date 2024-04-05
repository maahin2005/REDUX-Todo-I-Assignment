import { extendTheme } from "@chakra-ui/react";

export const customDarkTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#242424",
        color: "white",
      },
    },
    colors: {
      brand: {
        darkBg: "#fff",
      },
    },
  },
});

export const customLightTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
    },
    colors: {
      brand: {
        darkBg: "#242424",
      },
    },
  },
});
