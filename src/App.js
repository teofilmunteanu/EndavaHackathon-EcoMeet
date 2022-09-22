import * as React from "react";
import {Route, Routes} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react";
import {mainTheme} from "./styles/theme";


import Description from "./Components/description";
import NavBar from "./Components/NavBar";
import UpperHomePage from "./Components/UpperHomePage";
import OSignUp from "./Components/OSignUp";
import VSignUp from "./Components/VSignUp";
import Login from "./Components/Login";
import VFeed from "./Components/VFeed";
import OFeed from "./Components/OFeed";
import { VFeedData } from "./Components/VFeedData";
import { OFeedData } from "./Components/OFeedData";


function App() {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<><UpperHomePage/><Description/></>}/>
          <Route path="/OSignUp" element={<><OSignUp/></>}/>
          <Route path="/VSignUp" element={<><VSignUp/></>}/>
          <Route path="/Login" element={<><Login/></>}/>
          <Route path="/VFeed" element={<><VFeed feed={VFeedData}/></>}/>
          <Route path="/OFeed" element={<><OFeed ofeed={OFeedData}/></>}/>
          
        </Routes>
    </ChakraProvider>
    
  );
}

export default App;
