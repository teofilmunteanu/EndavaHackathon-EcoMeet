import { Text, Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

function NavBar() {
  return (
    <Flex
      align="center"
      w="100%"
      h="128px"
      bgGradient="linear(269.6deg, #FFCB30 -7.25%, #2CAA6E 48.24% ,  #56D02B 98.25%)"
      boxShadow="2xl"
    >
      <Image src="./Logo.png" alt="leaf" pl="8vw" />
      <Text
        fontSize="7xl"
        pl="2vw"
        color="white"
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        EcoMeet
      </Text>
    </Flex>
  );
}

export default NavBar;
