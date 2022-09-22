import * as React from "react";
import {Route, Routes} from "react-router-dom"

import Description from "./Components/description";
import NavBar from "./Components/NavBar";
import UpperHomePage from "./Components/UpperHomePage";
import OSignUp from "./Components/OSignUp";
import VSignUp from "./Components/VSignUp";
import Login from "./Components/Login";
import VFeed from "./Components/VFeed";
import ImageSlider from "./Components/ImageSlider";
import { SlideData } from "./Components/SlideData";


import { Accordion, ChakraProvider, Box } from "@chakra-ui/react";
import {mainTheme} from "./styles/theme";


function App() {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<><UpperHomePage/><Description/></>}/>
          <Route path="/OSignUp" element={<><OSignUp/></>}/>
          <Route path="/VSignUp" element={<><VSignUp/></>}/>
          <Route path="/Login" element={<><Login/></>}/>
          <Route path="/VFeed" element={<><VFeed slides={SlideData}/></>}/>
          
        </Routes>
        {/* <Box w="100%" p={4} color="white">
      <ImageSlider  />
    </Box> */}
    </ChakraProvider>
    
  );
}

export default App;
