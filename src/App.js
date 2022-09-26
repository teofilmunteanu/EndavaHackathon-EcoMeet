import * as React from "react";
import { Route, Routes } from "react-router-dom";

import Description from "./Components/description";
import NavBar from "./Components/NavBar";
import UpperHomePage from "./Components/UpperHomePage";

import OSignUp from "./Components/OSignUp";
import VSignUp from "./Components/VSignUp";
import Login from "./Components/Login";
import NavBarProfile from "./Components/NavBarProfile";
import CSignUp from "./Components/CSignUp";
import UProfile from "./Components/UProfile";
import OProfile from "./Components/OProfile"
import Shop from "./Components/Shop";



import { ChakraProvider } from "@chakra-ui/react";
import { mainTheme } from "./styles/theme";
import "@fontsource/inter";
import "@fontsource/neuton";
import VFeed from "./Components/VFeed";
import OFeed from "./Components/OFeed";
import { VFeedData } from "./Components/VFeedData";
import { OFeedData } from "./Components/OFeedData";

function App() {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UpperHomePage />
              <Description />
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
          path="/CSignUp"
          element={
            <>
              <CSignUp />
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
          path="/VFeed"
          element={
            <>
              <VFeed feed={VFeedData} />
            </>
          }
        />
        <Route path="/OFeed" element={<OFeed ofeed={OFeedData} />} />
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
