import * as React from "react";
import { Route, Routes } from "react-router-dom";


import { ChakraProvider } from "@chakra-ui/react";


import Description from "./Components/description";
import NavBar from "./Components/NavBar";
import UpperHomePage from "./Components/UpperHomePage";
import OSignUp from "./Components/OSignUp";
import VSignUp from "./Components/VSignUp";
import Login from "./Components/Login";
import UProfile from "./Components/UProfile";
import OProfile from "./Components/OProfile"
import Shop from "./Components/Shop";

import { mainTheme } from "./styles/theme";
import { VFeedData } from "./Components/VFeedData";


function App() {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UpperHomePage/>
              <Description/>
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
        <Route
          path="/UProfile"
          element={
            <>
              <UProfile feed={VFeedData} />
            </>
          }
        />
        <Route
          path="/OProfile"
          element={
            <>
              <OProfile feed={VFeedData} />
            </>
          }
        />
        <Route
          path="/Shop"
          element={
            <>
              <Shop/>
            </>
          }
        />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
