import {
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  FormLabel,
  useDisclosure,
  ModalCloseButton,
  GridItem,
  Text,
  Select,
  Spacer,
  Flex,
  FormControl,
  Stack,
  Image,
  Box,
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
  Heading,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import React from "react";
import "@fontsource/inter";
import "@fontsource/neuton";

const OFeed = ({ ofeed }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <div>
      <RemoveScrollBar />
      <Tabs isFitted variant="unstyled">
        <TabList mb="1em" boxShadow="0px 2px 2px rgba(0,0,0,0.25)" bgGradient="linear(269.6deg, yellow.100 -7.25%, green.100 48.24% ,  green.200 98.25%)">
          <Tab
              borderRadius="none"
              size="lg"
              w="50%"
              borderWidth="1px"
              borderColor="blackAlpha.400"
              _focus={{ bgColor:"blackAlpha.300", color: "white" }}
              _selected={{bgColor:"blackAlpha.300", color: "white" }}
              _hover={{ bgColor:"blackAlpha.300", color: "white"}} 
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
              borderRadius="none"
              size="lg"
              w="50%"
              borderWidth="1px"
              borderColor="blackAlpha.400"
              _focus={{ bgColor:"blackAlpha.300", color: "white" }}
              _selected={{bgColor:"blackAlpha.300", color: "white" }}
              _hover={{ bgColor:"blackAlpha.300", color: "white"}} 
          >
            {" "}
            <Image src="./Calendar.svg" w="4%" mr="0.5vw" />
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
            <Grid
              h='250px'
              templateColumns={'repeat(2, 1fr)'}
              gap={'5'}
            >
              <GridItem rowSpan={1}>
                <Accordion
                  allowToggle
                  style={{ overflowY: "scroll", height: "66vh" }}
                >
                  <AccordionItem
                    w="50vw"
                    h="8vw"
                    mb="1vw"
                    borderBottom="1px"
                    borderLeft={"1px"}
                    borderRight="1px"
                    borderColor="yellow.600"
                    borderBottomColor="yellow.600"
                    borderRightColor="yellow.600"
                    borderLeftColor="yellow.600"
                    boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                  >
                    <AccordionButton
                      alignItems="center"
                      w="100%"
                      h="100%"
                      onClick={onOpen}
                    >
                      <Grid
                        templateColumns="repeat(2, 1fr)"
                        templateRows={"repeat(1,1fr)"}
                        gap={5}
                        fontSize="2vw"
                      >
                        <GridItem w="150%" alignItems={"center"}>
                          <Text>
                            <span
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              <AddIcon color="yellow.600" />
                            </span>
                          </Text>
                        </GridItem>
                        <GridItem w="215%">
                          <Text>
                            <span
                              style={{
                                fontWeight: "bold",
                                color: "#B18037",
                                fontFamily: "neuton",
                              }}
                            >
                              Create An Event
                            </span>
                          </Text>
                        </GridItem>
                      </Grid>

                      <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                      >
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader
                            textAlign={"center"}
                            fontFamily="neuton"
                            fontWeight={"700"}
                            letterSpacing="0.2em"
                            color="#B18037"
                            textShadow="0px 2px 2px rgba(0,0,0,0.25)"
                          >
                            Create an Event
                          </ModalHeader>
                          <ModalCloseButton />
                          <ModalBody pb={6}>
                            <FormControl
                              variant="floating"
                              boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                              isRequired
                              isInvalid
                            >
                              <Input placeholder=" " ref={initialRef} />
                              <FormLabel variant="golden">
                                Event Title:
                              </FormLabel>
                            </FormControl>
                            <Stack
                              direction={{ base: "column", sm: "row" }}
                              align={"center"}
                              justify={"space-between"}
                            >
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  isRequired
                                  isInvalid
                                >
                                  <Input placeholder=" " />
                                  <FormLabel variant="golden">
                                    Start Date:
                                  </FormLabel>
                                </FormControl>
                              </div>
                              <span style={{ fontWeight: "bold" }}>_</span>
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  isRequired
                                  isInvalid
                                >
                                  <Input placeholder=" " />
                                  <FormLabel variant="golden">
                                    End Date:
                                  </FormLabel>
                                </FormControl>
                              </div>
                            </Stack>
                            <Stack
                              direction={{ base: "column", sm: "row" }}
                              align={"center"}
                              justify={"space-between"}
                            >
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  id="first-name"
                                  isRequired
                                  isInvalid
                                >
                                  <Input placeholder=" " />
                                  <FormLabel variant="golden">
                                    Start Hour:
                                  </FormLabel>
                                </FormControl>
                              </div>
                              <span style={{ fontWeight: "bold" }}>_</span>
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  id="first-name"
                                  isRequired
                                  isInvalid
                                >
                                  <Input placeholder=" " />
                                  <FormLabel variant="golden">
                                    End Hour:
                                  </FormLabel>
                                </FormControl>
                              </div>
                            </Stack>
                            <Stack
                              direction={{ base: "column", sm: "row" }}
                              justify={"space-between"}
                            >
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  id="first-name"
                                  isRequired
                                  isInvalid
                                >
                                  <Input placeholder=" " />
                                  <FormLabel variant="golden">
                                    Points:
                                  </FormLabel>
                                </FormControl>
                              </div>
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  id="first-name"
                                  isRequired
                                  isInvalid
                                >
                                  <Input placeholder=" " />
                                  <FormLabel variant="golden">
                                    Event Type:
                                  </FormLabel>
                                </FormControl>
                              </div>
                            </Stack>
                            <FormControl
                              mt={4}
                              variant="floating"
                              id="first-name"
                              isRequired
                              isInvalid
                            >
                              <Input placeholder=" " />
                              <FormLabel variant="golden">
                                Descprition:
                              </FormLabel>
                            </FormControl>
                            <Stack
                              direction={{ base: "column", sm: "row" }}
                              align={"center"}
                              justify={"space-between"}
                            >
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  id="first-name"
                                  isRequired
                                  isInvalid
                                >
                                  <Input placeholder=" " />
                                  <FormLabel variant="golden">
                                    Add Sponsors:
                                  </FormLabel>
                                </FormControl>
                              </div>
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  id="first-name"
                                  isRequired
                                  isInvalid
                                >
                                  <Input
                                    placeholder="photo"
                                    type="file"
                                    id="Photos"
                                  />
                                  <FormLabel variant="golden">
                                    Add Photos:
                                  </FormLabel>
                                </FormControl>
                              </div>
                            </Stack>
                          </ModalBody>
                          <ModalFooter justifyContent={"center"}>
                            <Button onClick={onClose} variant="golden" mb="1vw">
                              Create
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </AccordionButton>
                  </AccordionItem>
                  <br></br>
                  {ofeed.map((ofeed) => {
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
                            src={ofeed.image}
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
                                {ofeed.titlu_activitate}
                              </Heading>
                              <p
                                variant="auth"
                                fontWeight="400"
                                fontSize="1.5vw"
                              >
                                {ofeed.nume_firma}
                              </p>
                              <span
                                style={{
                                  fontWeight: "1000",
                                  fontFamily: "neuton",
                                  fontSize: "1.2vw",
                                }}
                              >
                                Date: {ofeed.date}
                              </span>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <Flex w="15%" direction={"column"}>
                            <Flex alignItems={"center"}>
                              <span
                                style={{
                                  fontWeight: "700",
                                  fontSize: "1.2vm",
                                  fontFamily: "neuton",
                                }}
                              >
                                <Image
                                  src="./2people.svg"
                                  w="50%"
                                  h="auto"
                                  ml="0.6vw"
                                />
                                {ofeed.participanti}
                              </span>
                              <Spacer />
                              <span
                                style={{
                                  fontStyle: "inter",
                                  fontWeight: "700",
                                }}
                              >
                                {ofeed.puncte} pts{" "}
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
                          {ofeed.descriere_activitate}
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </GridItem>
              <GridItem rowSpan={1}>
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
                  width="100%"
                  height='80%'
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
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
          <Grid
              h='250px'
              templateColumns={'repeat(2, 1fr)'}
              gap={'5'}
            >
              <GridItem rowSpan={1}>
                <Accordion
                  allowToggle
                  backgroundColor="yellow.500"
                  borderColor="yellow.600"
                  style={{ overflowY: "scroll", height: "66vh" }}
                >
                  {ofeed.map((ofeed) => {
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
                            src={ofeed.image}
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
                                {ofeed.titlu_activitate}
                              </Heading>
                              <p
                                variant="auth"
                                fontWeight="400"
                                fontSize="1.5vw"
                              >
                                {ofeed.nume_firma}
                              </p>
                              <span
                                style={{
                                  fontWeight: "1000",
                                  fontFamily: "neuton",
                                  fontSize: "1.2vw",
                                }}
                              >
                                Date: {ofeed.date}
                              </span>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <Flex w="15%" direction={"column"}>
                            <Flex alignItems={"center"}>
                              <span
                                style={{
                                  fontWeight: "700",
                                  fontSize: "1.2vm",
                                  fontFamily: "neuton",
                                }}
                              >
                                <Image
                                  src="./2people.svg"
                                  w="50%"
                                  h="auto"
                                  ml="0.6vw"
                                />
                                {ofeed.participanti}
                              </span>
                              <Spacer />
                              <span
                                style={{
                                  fontStyle: "inter",
                                  fontWeight: "700",
                                }}
                              >
                                {ofeed.puncte} pts{" "}
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
                          {ofeed.descriere_activitate}
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
                </GridItem>
                <GridItem rowSpan={1}>
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
                  width="100%"
                  height='80%'
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
              </GridItem>
              </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
export default OFeed;
