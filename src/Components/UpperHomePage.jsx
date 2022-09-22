import {Flex, Box, Text} from "@chakra-ui/react";
import React from "react";

function UpperHomePage() {
  return (
    <Flex h="100%">
      <Box w="70%">
        <img src="./Park2.jpg" alt="cover" />
        <Text
          as="h1"
          fontSize="6vw"
          position="absolute"
          top="33vw"
          left="8vw"
          color="white"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.3)"
        >
          Welcome to
        </Text>
        <Text
          as="p"
          fontSize="6vw"
          position="absolute"
          top="40vw"
          left="8vw"
          color="#FFCB30"
          textShadow=""
          bgGradient="linear(266.01deg, #FFBF00 18.2%, #FF9900 58.72%, #FFE600 65.82%, #8AEE67 98.4%)"
          bgClip="text"
        >
          EcoMeet
        </Text>
        <Text
          as="p"
          fontSize="6vw"
          position="absolute"
          top="40vw"
          left="6vw"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.3)"
          color="white"
          ml="26vw"
        >
          !
        </Text>
      </Box>
      <Box w="0.3%" color="white"></Box>
      <Box
        w="29.7%"
        background="linear-gradient(180deg, rgba(255, 203, 48, 0.2) 0%, rgba(31, 222, 199, 0) 100%), linear-gradient(180deg, #FFCB30 0%, #2CAA6E 52.6%, #56D02B 100%)"
        boxShadow="inset 0px 4px 40px 14px rgba(0, 0, 0, 0.25)"
      ></Box>
    </Flex>
  );
}

export default UpperHomePage;
