import { ChakraProvider } from "@chakra-ui/react";
import PublicRoutes from "./Routes/PublicRoutes";
import ThemeChanger from "./components/ThemeChanger";
import { customLightTheme, customDarkTheme } from "./Themes/customTheme";
import { useSelector } from "react-redux";

function App() {
  const themeState = useSelector((state) => state.theme);
  return (
    <>
      <ChakraProvider
        theme={themeState.isDarkTheme ? customDarkTheme : customLightTheme}
      >
        {/* Added padding to create space for ThemeChanger */}
        <ThemeChanger position="absolute" right={0} />
        <PublicRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
