import {
  Button,
  Grid,
  GridItem,
  Text,
  Select,
  Spacer,
  Flex,
  FormControl,
  Stack,
  Image,
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import "@fontsource/inter";
import "@fontsource/neuton";
const VFeed = ({ feed }) => {
  return (
    <div>
      <RemoveScrollBar />
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em" boxShadow="0px 2px 2px rgba(0,0,0,0.25)">
          <Tab
            bgGradient="linear(270deg, #2CAA6E 0%, #56D02B 100%)"
            _focus={{ textColor: "white" }}
            _selected={{ textColor: "white" }}
          >
            <Image src="./Area.svg" w="4%" /> &nbsp;&nbsp;{" "}
            <span
              style={{
                fontWeight: "400",
                fontFamily: "inter",
                textShadow: "0px 2px 2px rgba(0,0,0,0.5)",
              }}
            >
              Events In Your Area
            </span>
          </Tab>
          <Tab
            bgGradient="linear(90deg, #2CAA6E 0%, yellow 100%)"
            textColor="white"
            _focus={{ textColor: "white" }}
            _visited={{ textColor: "white" }}
            _selected={{ textColor: "white" }}
          >
            {" "}
            <Image src="./Calendar.svg" w="4%" mr="0.5vw" /> &nbsp;&nbsp;{" "}
            <span
              style={{
                fontWeight: "400",
                fontFamily: "inter",
                textShadow: "0px 2px 2px rgba(0,0,0,0.5)",
              }}
            >
              Your Events
            </span>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"center"}
              justify={"space-between"}
            >
              <div>
                <Accordion
                  allowToggle
                  backgroundColor="#F1FFF4"
                  style={{ overflowY: "scroll", height: "66vh" }}
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
                              <p
                                variant="auth"
                                fontWeight="400"
                                fontSize="1.5vw"
                              >
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
              </div>
              <div>
                <FormControl>
                  <Select
                    placeholder="Select Location"
                    fontSize="1.4vw"
                    color="#072C06"
                    textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="400"
                  >
                    <option>Iasi</option>
                    <option>Botosani</option>
                    <option>Galati</option>
                    <option>Timisoara</option>
                  </Select>
                </FormControl>
                <iframe
                  title="Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.84040659259!2d27.516930545568552!3d47.15611595595363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sro!2sro!4v1663429441856!5m2!1sro!2sro"
                  width="670px"
                  height="370px"
                />
                <Text
                  textColor="black"
                  textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                  fontFamily="inter"
                  fontWeight="400"
                  align="center"
                >
                  Current City:<br></br>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#2CAA6E",
                      textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                      fontFamily: "inter",
                      fontWeight: "400",
                      fontSize: "1.5vw",
                    }}
                  >
                    Iasi, Romania
                  </span>
                </Text>
              </div>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"center"}
              justify={"space-between"}
            >
              <div>
                <Accordion
                  allowToggle
                  backgroundColor="yellow.500"
                  borderColor="yellow.600"
                  style={{ overflowY: "scroll", height: "66vh" }}
                >
                  {feed.map((feed) => {
                    return (
                      <AccordionItem
                        w="50vw"
                        borderColor="yellow.600"
                        bg="yellow.500"
                        borderLeft="1px"
                        borderLeftColor="yellow.600"
                        borderRight="1px"
                        borderRightColor="yellow.600"
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
                            borderLeftColor="yellow.600"
                            borderRight="1px"
                            borderRightColor="yellow.600"
                            borderTop="1px"
                            borderTopColor="yellow.600"
                            borderBottom="1px"
                            borderBottomColor="yellow.600"
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
                              <p
                                variant="auth"
                                fontWeight="400"
                                fontSize="1.5vw"
                              >
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
                          <Flex w="20%" direction={"column"}>
                            <Flex alignItems={"center"}>
                              <span
                                style={{
                                  fontWeight: "700",
                                  fontSize: "1.2vm",
                                  fontFamily: "neuton",
                                }}
                              >
                                <Button
                                  variant="golden"
                                  mr="1vw"
                                  align="center"
                                >
                                  Leave
                                </Button>
                                <Image
                                  src="./2people.svg"
                                  w="50%"
                                  h="auto"
                                  ml="1vw"
                                />
                                {feed.participanti}
                              </span>
                              <Spacer />
                              <span
                                style={{
                                  fontStyle: "inter",
                                  fontWeight: "700",
                                }}
                              >
                                {feed.puncte} pts{" "}
                              </span>
                            </Flex>
                          </Flex>
                        </Stack>
                        <br></br>
                        <AccordionPanel
                          fontFamily={"inter"}
                          fontSize="1.2vw"
                          textColor={"#592222"}
                        >
                          {feed.descriere_activitate}
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
              <div>
                <FormControl>
                  <Select
                    placeholder="Select Location"
                    fontSize="1.4vw"
                    color="yellow.600"
                    textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="400"
                  >
                    <option>Iasi</option>
                    <option>Botosani</option>
                    <option>Galati</option>
                    <option>Timisoara</option>
                  </Select>
                </FormControl>
                <iframe
                  title="Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.84040659259!2d27.516930545568552!3d47.15611595595363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sro!2sro!4v1663429441856!5m2!1sro!2sro"
                  width="670px"
                  height="370px"
                />
                <Text
                  textColor="black"
                  textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                  fontFamily="inter"
                  fontWeight="400"
                  align="center"
                >
                  Current City:<br></br>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#B18037",
                      textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                      fontFamily: "inter",
                      fontWeight: "400",
                      fontSize: "1.5vw",
                    }}
                  >
                    Iasi, Romania
                  </span>
                </Text>
              </div>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
export default VFeed;
