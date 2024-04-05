import React from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/themeRedux/actions";

function ThemeChanger() {
  const themeState = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box p={5}>
      <Button onClick={handleTheme}>
        {themeState.isDarkTheme ? "Enable Light Mode" : "Enable Dark Mode"}
      </Button>
    </Box>
  );
}

export default ThemeChanger;
