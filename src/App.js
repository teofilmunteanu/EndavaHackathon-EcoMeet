import * as React from "react";
import { Route, Routes } from "react-router-dom";

import Description from "./Components/description";
import NavBar from "./Components/NavBar";
import UpperHomePage from "./Components/UpperHomePage";
import OSignUp from "./Components/OSignUp";
import VSignUp from "./Components/VSignUp";
import Login from "./Components/Login";
import BottomBar from "./Components/BottomBar";

import { ChakraProvider } from "@chakra-ui/react";

import { mainTheme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
          <Route path="/" element={<><UpperHomePage/><Description/></>}/>
      <Description></Description>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
              <UpperHomePage></UpperHomePage>
              <Description></Description>
            </>
          }
        />
        <Route
          path="/OSignUp"
          element={
            <>
              <OSignUp />
            </>
          }
        />
        <Route
          path="/VSignUp"
          element={
            <>
              <VSignUp />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
      <BottomBar></BottomBar>
    </ChakraProvider>
  );
}

export default App;
