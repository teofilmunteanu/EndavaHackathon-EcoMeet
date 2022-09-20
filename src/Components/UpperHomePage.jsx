import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Divider,
} from "@chakra-ui/react";

import React from "react";

function UpperHomePage() {
  return (
    <Flex h="100%" direction={{ base: "column", md: "row" }}>
      <Box w={["100%", null, "70%"]} boxShadow="md">
        <Image src="./Park2.jpg" alt="cover" blur="1px" />
        <Text
          as="h1"
          fontSize="6vw"
          position="absolute"
          top="35vw"
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
          top="43vw"
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
          top="43vw"
          left="6vw"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.3)"
          color="white"
          ml="26vw"
        >
          !
        </Text>
      </Box>
      <Box
        w={["100%", null, "0.3%"]}
        h={["0.3%", null, "100%"]}
        bgColor="white"
        border={"1px"}
        borderColor="white"
        boxShadow="md"
      ></Box>
      <Box
        w={["100%", null, "29.7%"]}
        h={{ base: "auto", xs: "100%" }}
        //alignItems="center"
        background="linear-gradient(180deg, rgba(255, 203, 48, 0.2) 0%, rgba(31, 222, 199, 0) 100%), linear-gradient(180deg, #FFCB30 0%, #2CAA6E 52.6%, #56D02B 100%)"
        boxShadow="md"
      >
        <Flex
          ml={["32vw", null, "4vw"]}
          alignItems="center"
          direction="column"
          w={["35%", null, "70%"]}
          h="75%"
          bg="#1C6F47"
          mt="5vw"
          mb="5vw"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          borderColor="#1C6F47"
          boxShadow="xl"
          lineHeight="1vw"
        >
          <Heading
            fontSize="1.5vw"
            textShadow="xs"
            fontWeight="semibold"
            mt="5vw"
            mr="4vw"
            color="white"
            textAlign="left"
          >
            Get Started as:
          </Heading>
          <Button
            variant="outline"
            color="#1C6F47"
            bgGradient="linear(92.04deg, rgba(255, 191, 0, 0.2) 0%, rgba(29, 255, 214, 0.2) 100%, rgba(255, 255, 255, 0.2) 100%)"
            boxShadow="2xl"
            w="70%"
            h="10%"
            mt="3.5vw"
          >
            <Image
              src="./RightArrow.png"
              alt="Check mark"
              width="15%"
              heigt="auto"
            />
            <Text fontSize="1.5vw" color="black" ml="1vw">
              Volunteer
            </Text>
          </Button>
          <Button
            variant="outline"
            color="#1C6F47"
            bgGradient="linear(92.04deg, rgba(255, 191, 0, 0.2) 0%, rgba(29, 255, 214, 0.2) 100%, rgba(255, 255, 255, 0.2) 100%)"
            boxShadow="2xl"
            w="70%"
            h="10%"
            mt="3.5vw"
          >
            <Image
              src="./RightArrow.png"
              alt="Check mark"
              width="15%"
              heigt="auto"
            />
            <Text fontSize="1.5vw" color="black" ml="1vw">
              Organizer
            </Text>
          </Button>
          <Flex alignItems="baseline" ml="3vw" line-height="1" spacing="24px">
            <Image
              src="./Check.png"
              alt="Check mark"
              width="6%"
              heigt="auto"
              boxShadow="md"
            />
            <Text
              fontSize="1.5vw"
              textShadow="xs"
              mt="3vw"
              pl="1vw"
              color="white"
              fontWeight="thin"
              lineHeight="2vw"
            >
              Already have an account?
            </Text>
          </Flex>
          <Button
            size="sm"
            w="30%"
            h="8%"
            mt="2vw"
            varient="link"
            boxShadow="md"
            bg="rgba(0,0,0,0.2)"
            mb="3vw"
          >
            <Text fontSize="1vw" color="black">
              Log in
            </Text>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default UpperHomePage;
