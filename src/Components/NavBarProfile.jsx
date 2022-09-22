import {
  Text,
  Flex,
  Image,
  Grid,
  GridItem,
  Box,
  Avatar,
  VStack,
  HStack,
  Progress,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/inter";
import "@fontsource/neuton";
import { TriangleDownIcon } from "@chakra-ui/icons";

function NavBarProfile() {
  return (
    <Grid
      h="128px"
      templateColumns="repeat(10,1fr)"
      gap="0"
      boxShadow="0px 4px 4px rgba(0,0,0,0.5)"
    >
      <GridItem colSpan={"7"}>
        <Flex
          align="center"
          w="100%"
          h="100%"
          bgGradient="linear(269.6deg, yellow -7.25%, green.400 48.24% ,  green.200 98.25%)"
        >
          <Image
            src="./LeafLogo.svg"
            alt="leaf"
            pl="8vw"
            w={["20%", "20%", "18%"]}
          />
          <Text
            fontSize={["12vw", "12vw", "8vw"]}
            pl="2vw"
            color="white"
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            fontFamily="neuton"
          >
            EcoMeet
          </Text>
        </Flex>
      </GridItem>
      <GridItem
        colSpan={"3"}
        bgGradient="linear(180deg, rgba(255, 254, 254, 0.5) -20%, #FFCB30 100%)"
      >
        <Grid
          h="128px"
          templateColumns="repeat(17,1fr)"
          gap="0"
          alignItems="center"
        >
          <GridItem colSpan={"3"}>
            <Box>
              <Avatar
                name="Charles Ludwigen"
                src="./Charles.jpg"
                //borderRadius={"50%"}
                boxSize={"4vw"}
                ml="2vw"
                boxShadow="0px 4px 4px rgba(0,0,0,0.3)"
                borderSize={"1"}
                borderColor="black"
              />
            </Box>
          </GridItem>
          <GridItem colSpan={"11"} m={"5"}>
            <Grid templateRows="repeat(2,1fr)" gap="2">
              <GridItem colRow={1}>
                <HStack spacing="12">
                  <Box>
                    <Text
                      color="black"
                      fontFamily={"neuton"}
                      fontWeight="300"
                      fontSize={"1.5vw"}
                      letterSpacing="0.005em"
                    >
                      Charles Ludwigen
                    </Text>
                  </Box>
                  <Avatar
                    alignItems={"center"}
                    bg="white"
                    boxSize={"2.5vw"}
                    borderRadius={"50%"}
                    boxShadow="0px 4px 4px rgba(0,0,0,0.25)"
                  >
                    <Text
                      color="black"
                      align={"center"}
                      fontSize="1.3vw"
                      m="0.5vw"
                    >
                      10
                    </Text>
                  </Avatar>
                </HStack>
              </GridItem>
              <GridItem colRow={1}>
                <Progress
                  value={"30"}
                  colorScheme="red"
                  boxShadow={"0px 4px 4px rgba(0,0,0,0.25)"}
                ></Progress>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={"3"}>
            <TriangleDownIcon
              boxSize={"3vw"}
              m={"1"}
              color="green.100"
              textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
            />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}

export default NavBarProfile;
