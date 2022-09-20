import logo from "./logo.svg";
import "./App.css";

import * as React from "react";


import { ChakraProvider } from "@chakra-ui/react";


import UpperHomePage from "./Components/UpperHomePage";

import NavBar from "./Components/NavBar";
import Description from "./Components/description";


import {Route, withRouter, Routes} from "react-router-dom"

import MainPage from "./Components/MainPage";
function App() {
  return (
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

    </ChakraProvider>
  );
}

export default App;
