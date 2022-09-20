import * as React from "react";
import { Route, Routes } from "react-router-dom";


import { ChakraProvider } from "@chakra-ui/react";


import UpperHomePage from "./Components/UpperHomePage";

import NavBar from "./Components/NavBar";
import Description from "./Components/description";
import NavBar from "./Components/NavBar";
import UpperHomePage from "./Components/UpperHomePage";
import OSignUp from "./Components/OSignUp";
import VSignUp from "./Components/VSignUp";
import Login from "./Components/Login";
import BottomBar from "./Components/BottomBar";

import { ChakraProvider } from "@chakra-ui/react";
import { mainTheme } from "./styles/theme";

import {Route, withRouter, Routes} from "react-router-dom"

import MainPage from "./Components/MainPage";
function App() {
  return (
<<<<<<< HEAD
    <ChakraProvider>

      <NavBar></NavBar>
      <UpperHomePage></UpperHomePage>
      <Description></Description>
      <React.Fragment>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<UpperHomePage/>}/>
          <Route path="/main" element ={<MainPage/>}/>
        </Routes>
      </React.Fragment>

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
      </Routes>
      <BottomBar></BottomBar>
    </ChakraProvider>
  );
}

export default App;
