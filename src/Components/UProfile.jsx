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

function UProfile() {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab
          w="100"
          h="100 "
          bgGradient="linear(90deg, #56D02B 0%, #47C244 100%)"
        ></Tab>
        <Tab
          w="236.5"
          h="100 "
          bgGradient="linear(90deg, #47C244 0%, #3AB758 100%)"
        >
          <Image src="./Vector.png"></Image>
        </Tab>
        <Tab
          w="236.5"
          h="100 "
          bgGradient="linear(90deg, #3AB758 0%, #32B064 100%)"
        >
          <Image src="./Calendar.png"></Image>
        </Tab>
        <Tab
          w="2198.5"
          h="100"
          bgGradient="linear(270deg,#FFCB30  0%,#32B064  98.27%)"
        >
          <Image src="./profile.png" />
          <Text color="white" fontSize="3xl">
            Your Profile
          </Text>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel />
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
              rolSpan={2}
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
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    ml="50"
                    mt="10"
                  />
                </GridItem>
                <GridItem colSpan={2} rowspan={1} h="44">
                  <Text
                    textAlign={["left"]}
                    mt="10"
                    fontSize="4xl"
                    fontWeight="extrabold"
                  >
                    {" "}
                    Charles Ludwigsten
                  </Text>
                  <Text fontSize="2xl">charles.ludwisgten2@gmail.com</Text>
                  <Text fontSize="xl" fontWeight="bold">
                    Iasi, Romania
                  </Text>
                  <Text fontSize="3xl" fontWeight="bold" mt="45">
                    Level 10
                  </Text>
                  <Text fontSize="2xl">20/50 EXP</Text>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              colSpan={1}
              rolSpan={2}
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
                <Text fontWeight="bold" fontSize="4xl" ml="38">
                  Achievements:
                </Text>
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
              >
                <GridItem
                  rolSpan={2}
                  colSpan={1}
                  bg="#FFCB30"
                  bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(255, 245, 0, 0.304) 100%)"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <Grid
                    h="200px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(2, 1fr)"
                    gap={1}
                  >
                    <GridItem rowSpan={2} colSpan={1} bg="red" />
                    <GridItem rowSpan={1} colSpan={1} bg="blue" />
                    <GridItem rowSpan={1} colSpan={1} bg="yellow" />
                  </Grid>
                  <Heading textAlign={["left", "center"]} fontSize="3xl">
                    Tree-boom!
                  </Heading>
                </GridItem>
                <GridItem
                  rolSpan={2}
                  colSpan={1}
                  bg="#BD30FF"
                  bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(190, 1, 103, 0.304) 100%)"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <Heading textAlign={["left", "center"]} fontSize="3xl">
                    Tree-boom!
                  </Heading>
                </GridItem>
                <GridItem
                  rolSpan={2}
                  colSpan={1}
                  bg="#64EA34"
                  bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(143, 255, 0, 0.304) 100%)"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <Heading textAlign={["left", "center"]} fontSize="3xl">
                    Tree-boom!
                  </Heading>
                </GridItem>
                <GridItem
                  rolSpan={2}
                  colSpan={1}
                  bg="#30FFF3"
                  bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(255, 245, 0, 0.304) 100%)"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <Heading textAlign={["left", "center"]} fontSize="3xl">
                    Tree-boom!
                  </Heading>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              colSpan={1}
              rolSpan={2}
              bg="#D0FEBF"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="3xl"
            >
              <Text
                textAlign={["left", "center"]}
                fontSize="3xl"
                fontWeight="bold"
              >
                Bio:
              </Text>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem w="100%" h="10">
                  <Text fontWeight="bold" fontSize="xl" ml="15">
                    Gender: Male
                  </Text>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Text fontWeight="bold" fontSize="xl">
                    Age:24
                  </Text>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Text fontWeight="bold" fontSize="xl">
                    Joined: 5/06/22
                  </Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                <GridItem colSpan={1} h="10" ml="15">
                  <Text fontWeight="bold" fontSize="xl">
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
                  <Text fontWeight="bold" fontSize="xl">
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
                  <Text fontWeight="bold" fontSize="xl" mt="9">
                    Your description:
                  </Text>
                </GridItem>
                <GridItem colStart={7} colEnd={2} h="10">
                  <Editable
                    defaultValue="type"
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
              rolSpan={2}
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
                <Text fontSize="4xl" ml="38" fontWeight="bold">
                  Activity:
                </Text>
              </Box>
              <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(1, 1fr)"
                gap={5}
                mt="5"
                ml="10"
                mr="10"
              >
                <GridItem
                  rolSpan={1}
                  colSpan={1}
                  bg="#F1FFF4"
                  border="1px solid #37B177"
                  box-shadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
                />
                <GridItem
                  rolSpan={1}
                  colSpan={1}
                  bg="#F1FFF4"
                  border="1px solid #37B177"
                  box-shadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
                />
              </Grid>
            </GridItem>
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default UProfile;
