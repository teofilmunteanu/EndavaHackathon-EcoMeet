import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function NavBar() {
  return (
    <Flex align="center"
      w="100%"
      h="160px"
      bgGradient="linear(269.6deg, #FFCB30 -7.25%, #2CAA6E 48.24% ,  #56D02B 98.25%)"
      boxShadow="md"
    >

      <Text fontSize="36px" pl="20px">
        EcoMeet
      </Text>

    </Flex>
  );
}

export default NavBar;
