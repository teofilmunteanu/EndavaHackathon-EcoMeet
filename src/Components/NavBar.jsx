import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function NavBar() {
  return (
    <Box
      w="100%"
      h="15vh"
      bgGradient="linear(269.6deg, #FFCB30 -7.25%, #2CAA6E 48.24% ,  #56D02B 98.25%)"
      boxShadow="md"
    >
      <Flex justify="center" align="center">
        <Text fontSize="36px" textAlign="center">
          EcoMeet
        </Text>
      </Flex>
    </Box>
  );
}

export default NavBar;
