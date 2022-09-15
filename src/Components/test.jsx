import {
  Flex,
  Box,
  Image,
  Badge,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import React from "react";

function Test() {
  return (
    <Flex h="100%">
      <Box w="70%" >
        <img src="./Park2.jpg" alt="cover" />
      </Box>
      <Box w="0.3%" color="white">
      </Box>
      <Box w="29.7%" background="linear-gradient(180deg, rgba(255, 203, 48, 0.2) 0%, rgba(31, 222, 199, 0) 100%), linear-gradient(180deg, #FFCB30 0%, #2CAA6E 52.6%, #56D02B 100%)"
boxShadow="inset 0px 4px 40px 14px rgba(0, 0, 0, 0.25)"></Box>
    </Flex>
  );
}

export default Test;
