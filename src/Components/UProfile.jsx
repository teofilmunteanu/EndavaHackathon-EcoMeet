import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  Button,
  Flex,
  Avatar,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Divider,
  Link,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Spacer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CalendarIcon, Search2Icon, DeleteIcon } from "@chakra-ui/icons";
import "@fontsource/inter";
import "@fontsource/neuton";

const UProfile = ({ feed }) => {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab
          w="236.5"
          bgGradient="linear(90deg, #47C244 0%, #3AB758 100%)"
          _focus={{ textColor: "white" }}
          _selected={{ textColor: "white" }}
        >
          <Image src="./Area.svg" w="7%"></Image>
        </Tab>
        <Tab
          w="236.5"
          bgGradient="linear(90deg, #3AB758 0%, #32B064 100%)"
          _focus={{ textColor: "white" }}
          _selected={{ textColor: "white" }}
        >
          <Image src="./Calendar.svg" w="7%"></Image>
        </Tab>
        <Tab
          w="2198.5"
          h="100"
          bgGradient="linear(270deg, yellow  0%,#32B064  98.27%)"
        >
          <Image src="./Profile.svg" w="7%" mr="1vw" />
          <Text
            color="white"
            fontSize="3xl"
            fontWeight="400"
            fontFamily="inter"
            textShadow="0px 2px 2px rgba(0,0,0,0.5)"
          >
            Your Profile
          </Text>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel />
        <TabPanel />
        <TabPanel>
          <Grid
            h="700px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={10}
            ml="30"
            mr="30"
            mt="5"
          >
            <GridItem
              colSpan={1}
              rowSpan={1}
              bg="#D0FEBF"
              borderRadius="3xl"
              boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={0}
              >
                <GridItem rowSpan={2} colSpan={1}>
                  <Avatar
                    borderRadius="full"
                    boxSize="150px"
                    src="./Charles.jpg"
                    alt="Dan Abramov"
                    ml="50"
                    mt="10"
                  />
                </GridItem>
                <GridItem colSpan={2} rowSpan={1} h="44">
                  <Heading
                    textAlign={["left"]}
                    mt="10"
                    variant="authEffect"
                    fontWeight="1000"
                    letterSpacing="0.05em"
                  >
                    Charles Ludwigsten
                  </Heading>
                  <Text
                    textAlign={["left"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="inter"
                    fontWeight="light"
                    fontSize={"1vw"}
                  >
                    charles.ludwisgten2@gmail.com
                  </Text>
                  <Text
                    textAlign={["left"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontSize="1.2vw"
                    fontWeight="500"
                  >
                    Iasi, Romania
                  </Text>
                  <Text
                    textAlign={["left"]}
                    color="#072C06"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontSize="1.6vw"
                    fontWeight="500"
                    mt="45"
                  >
                    Level 10
                  </Text>
                  <Text
                    textAlign={["left"]}
                    color="#072C06"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontSize="1.7vw"
                    fontWeight="600"
                  >
                    20/50 EXP
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              bg="#EEFFE7"
              borderRadius="3xl"
              boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
              alignItems={"center"}
            >
              <Box
                w="910"
                h="92"
                bg="#D0FEBF"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="3xl"
                alignItems="center"
              >
                <Heading
                  variant="authEffect"
                  textAlign={"left"}
                  pt="1vw"
                  pl="3vw"
                  fontSize="2vw"
                >
                  Achievements:
                </Heading>
              </Box>
              <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={8}
                mt="5"
                ml="10"
                mr="10"
                w="300"
                overflowX="scroll"
              >
                <GridItem
                  rowSpan={2}
                  colSpan={1}
                  bg="#FFCB30"
                  bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(255, 245, 0, 0.304) 100%)"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderWidth={"1px"}
                  overflow="hidden"
                  borderRadius={"2xl"}
                >
                  <Grid
                    h="100%"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={0}
                    alignItems="center"
                  >
                    <GridItem rowSpan={1} colSpan={1}>
                      <Image src="Tree-Boom.svg" w="70%" ml="0.75vw" />
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Heading fontFamily={"neuton"} fontSize="2vw" mb="-0.2vw">
                        Tree-Boom!
                      </Heading>
                      <Text
                        fontSize="1vw"
                        fontFamily={"neuton"}
                        letterSpacing="0.05em"
                        fontWeight={"bold"}
                      >
                        Earned 2/07/22
                      </Text>
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem
                  rowSpan={2}
                  colSpan={1}
                  bg="#BD30FF"
                  bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(190, 1, 103, 0.304) 100%)"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <Grid
                    h="100%"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={0}
                  >
                    <GridItem rowSpan={1} colSpan={1}>
                      <Image src="NeverBusy.svg" w="70%" ml="0.75vw" />
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Heading>Never Busy!</Heading>
                      <Text fontSize="xl">Earned 30/07/22</Text>
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem
                  rowSpan={2}
                  colSpan={1}
                  bg="#64EA34"
                  bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(143, 255, 0, 0.304) 100%)"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <Grid
                    h="100%"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={0}
                  >
                    <GridItem rowSpan={1} colSpan={1}>
                      <Image src="TrashCan.svg" w="70%" ml="0.75vw" />
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Heading>TrashCAN!</Heading>
                      <Text fontSize="xl">Earned 5/07/22</Text>
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem
                  rowSpan={2}
                  colSpan={1}
                  bg="#30FFF3"
                  bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(255, 245, 0, 0.304) 100%)"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <Grid
                    h="100%"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={0}
                  >
                    <GridItem rowSpan={1} colSpan={1}>
                      <Image src="./Impactful.svg" w="70%" ml="0.75vw" />
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Heading>Impactful!</Heading>
                      <Text fontSize="xl">Earned 22/08/22</Text>
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem
                  rowSpan={2}
                  colSpan={1}
                  bg="#30FFF3"
                  bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(255, 245, 0, 0.304) 100%)"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <Grid
                    h="100%"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={0}
                  >
                    <GridItem rowSpan={1} colSpan={1}>
                      <Image src="Impactful.svg" w="70%" ml="0.75vw" />
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Heading>Impactful!</Heading>
                      <Text fontSize="xl">Earned 22/08/22</Text>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              colSpan={1}
              rowSpan={2}
              bg="#D0FEBF"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="3xl"
            >
              <Text
                textAlign={["center"]}
                color="black"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontWeight="bold"
                fontSize={"2vw"}
                mb="1vw"
                mt="1vw"
              >
                Bio:
              </Text>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem w="100%" h="10">
                  <Text
                    ml="15"
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
                  >
                    Gender: Male
                  </Text>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Text
                    ml="15"
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
                  >
                    Age:24
                  </Text>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Text
                    ml="15"
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
                  >
                    Joined: 5/06/22
                  </Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                <GridItem colSpan={1} h="10" ml="15">
                  <Text
                    ml="15"
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
                  >
                    Work:
                  </Text>
                </GridItem>
                <GridItem colStart={4} colEnd={2} h="10">
                  <Editable
                    defaultValue="Type here:"
                    fontSize="xl"
                    fontWeight="bold"
                    mt="-1"
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                <GridItem colSpan={1} h="10" ml="15">
                  <Text
                    ml="15"
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
                  >
                    Activity:
                  </Text>
                </GridItem>
                <GridItem colStart={7} colEnd={2} h="10">
                  <Editable
                    defaultValue="Type here:"
                    fontSize="xl"
                    fontWeight="bold"
                    mt="-1"
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                <GridItem colSpan={1} h="10" ml="15">
                  <Text
                    ml="15"
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
                  >
                    Your description:
                  </Text>
                </GridItem>
                <GridItem colStart={7} colEnd={2} h="10">
                  <Editable
                    defaultValue="Type here"
                    fontSize="xl"
                    fontWeight="bold"
                    mt="9"
                    ml="15"
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              colSpan={1}
              rowSpan={2}
              bg="#EEFFE7"
              borderRadius="3xl"
              boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <Box
                w="910"
                h="92"
                bg="#D0FEBF"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="3xl"
              >
                <Heading
                  variant="authEffect"
                  textAlign={"left"}
                  pt="1vw"
                  pl="3vw"
                  fontSize="2vw"
                >
                  Activity:
                </Heading>
              </Box>
              <Accordion
                allowToggle
                backgroundColor="#F1FFF4"
                style={{ overflowY: "scrowl", height: "20vh" }}
              >
                {feed.map((feed) => {
                  return (
                    <AccordionItem
                      w="50vw"
                      borderColor="green.600"
                      bg="green.500"
                      borderLeft="1px"
                      borderLeftColor="green.600"
                      borderRight="1px"
                      borderRightColor="green.600"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      boxShadow={"0px 2px 2px rgba(0,0,0,0.25)"}
                      mb="2vw"
                    >
                      <Stack
                        alignItems={"center"}
                        direction={{ base: "line", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                        m="1vw"
                        mt="2vw"
                      >
                        <Image
                          w="20%"
                          boxSize="100px"
                          src={feed.image}
                          overflow="hidden"
                          borderWidth="3px"
                          borderRadius="5px"
                          boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                          borderLeft="1px"
                          borderLeftColor="green.600"
                          borderRight="1px"
                          borderRightColor="green.600"
                          borderTop="1px"
                          borderTopColor="green.600"
                          borderBottom="1px"
                          borderBottomColor="green.600"
                        />
                        <AccordionButton w="65%">
                          <Box
                            flex="1"
                            textAlign="left"
                            alignItems={"center"}
                            variant="golden"
                          >
                            <Heading variant="golden">
                              {feed.titlu_activitate}
                            </Heading>
                            <p variant="auth" fontWeight="400" fontSize="1.5vw">
                              {feed.nume_firma}
                            </p>
                            <span
                              style={{
                                fontWeight: "1000",
                                fontFamily: "neuton",
                                fontSize: "1.2vw",
                              }}
                            >
                              Date: {feed.date}
                            </span>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <Flex w="20%">
                          <Flex alignItems={"center"}>
                            <span
                              style={{
                                fontWeight: "700",
                                fontSize: "1.2vm",
                                fontFamily: "neuton",
                              }}
                            >
                              <Button variant="auth" mr="1vw" align="center">
                                {feed.join ? "Join" : "Joined"}
                              </Button>
                              <Image src="./2people.svg" w="50%" h="auto" />
                              {feed.participanti}
                            </span>
                            <Spacer />
                            <span
                              style={{
                                fontStyle: "inter",
                                fontWeight: "700",
                              }}
                            >
                              <Box mr="3vw">{feed.puncte} pts </Box>
                            </span>
                          </Flex>
                        </Flex>
                      </Stack>
                      <br></br>
                      <AccordionPanel
                        fontFamily={"inter"}
                        fontSize="1.2vw"
                        textColor={"#072C06"}
                      >
                        {feed.descriere_activitate}
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </GridItem>
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default UProfile;
