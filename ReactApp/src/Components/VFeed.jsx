import { Button, Grid, GridItem, Text, Select, Spacer, Flex, FormControl, Stack, Image, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Center } from '@chakra-ui/react';
import { CalendarIcon, Search2Icon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react';
import { RemoveScrollBar } from 'react-remove-scroll-bar';



const VFeed = ({ feed }) => {
  return (
    <div>
      <RemoveScrollBar />
      <Tabs isFitted variant='enclosed' colorScheme='green'>
        <TabList mb='1em'>
          <Tab><Search2Icon /> &nbsp;&nbsp; <span style={{ fontWeight: 'bold' }}>Events In Your Area</span></Tab>
          <Tab> <CalendarIcon /> &nbsp;&nbsp; <span style={{ fontWeight: 'bold' }}>Your Events</span></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid
              h='250px'
              templateColumns={'repeat(2, 1fr)'}
              gap={'5'}
            >
              <GridItem rowSpan={1}>
                  <Accordion allowToggle backgroundColor="#F1FFF4" style={{ overflowY: "scroll", height: "66vh" }}>
                    {feed.map((feed) => {
                      return (
                        <AccordionItem w='50vw'>
                          <Stack alignItems={"center"}
                            direction={{ base: 'line', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Image
                              w="20%"
                              boxSize='100px'
                              src={feed.image}
                            />
                            <AccordionButton w="65%">

                              <Box flex='1' textAlign='left' alignItems={"center"}>
                                <span style={{ fontWeight: 'bold' }}>{feed.titlu_activitate}</span>
                                <p>{feed.nume_firma}</p>
                                <span style={{ fontWeight: 'bold' }}>Date: {feed.date}</span>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <Grid
                              h='50px'
                              templateRows='repeat(2, 1fr)'
                              templateColumns='repeat(2, 1fr)'
                              gap={'3'}
                            >
                              <GridItem rowSpan={1} colSpan={2}> <Center><Button variant='auth'>{feed.join ? "Join" : "Joined"}</Button></Center></GridItem>
                              <GridItem rowSpan={1} colSpan={1}> <span style={{ fontWeight: 'bold' }}>{feed.participanti}<DeleteIcon /> </span></GridItem>
                              <GridItem rowSpan={1} colSpan={1}> <span>{feed.puncte} pts </span></GridItem>
                            </Grid>
                          </Stack><br></br>
                          <AccordionPanel pb={4}>
                            {feed.descriere_activitate}
                          </AccordionPanel>
                        </AccordionItem>

                      );
                    })}
                  </Accordion>
              </GridItem>
              <GridItem rowSpan={1}>
                <div position='sticky'>
                  <FormControl>
                    <Select placeholder='Select Another City:'>
                      <option>Iasi</option>
                      <option>Botosani</option>
                      <option>Galati</option>
                      <option>Timisoara</option>
                    </Select>
                  </FormControl>
                </div>
                <iframe title="Maps"
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.84040659259!2d27.516930545568552!3d47.15611595595363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sro!2sro!4v1663429441856!5m2!1sro!2sro'
                  width="100%"
                  height='80%'/>
                <p align="center">Current City:<br></br>
                  <span style={{ fontWeight: 'bold', color: 'green' }}>Iasi, Romania</span>
                </p>
              </GridItem>
          </Grid>
        </TabPanel>


        <TabPanel>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            align={'center'}
            justify={'space-between'}>
            <div>
              <Accordion allowToggle backgroundColor="#FFFDF1" style={{ overflowY: "scroll", height: "66vh" }}>
                {feed.map((feed) => {
                  return (
                    <AccordionItem w='50vw'>
                      <Stack alignItems={"center"}
                        direction={{ base: 'line', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Image
                          w="20%"
                          boxSize='100px'
                          src={feed.image}
                        />
                        <AccordionButton w="65%">

                          <Box flex='1' textAlign='left' alignItems={"center"}>
                            <span style={{ fontWeight: 'bold' }}>{feed.titlu_activitate}</span>
                            <p>{feed.nume_firma}</p>
                            <span style={{ fontWeight: 'bold' }}>Date: {feed.date}</span>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <Grid
                          h='50px'
                          templateRows='repeat(2, 1fr)'
                          templateColumns='repeat(2, 1fr)'
                          gap={'3'}
                        >
                          <GridItem rowSpan={1} colSpan={2}> <Center><Button variant='golden'>Leave</Button></Center></GridItem>
                          <GridItem rowSpan={1} colSpan={1}> <span style={{ fontWeight: 'bold' }}>{feed.participanti}<DeleteIcon /> </span></GridItem>
                          <GridItem rowSpan={1} colSpan={1}> <span>{feed.puncte} pts </span></GridItem>
                        </Grid>
                      </Stack><br></br>
                      <AccordionPanel pb={4}>
                        <Grid
                          h='200px'
                          templateRows='repeat(6, 1fr)'
                          templateColumns='repeat(2, 1fr)'
                          gap={4}
                        >
                          <GridItem rowSpan={2} colSpan={1}> <Text><span style={{ color: '#B18037' }}>Event Type: </span> <span style={{ fontWeight: 'bold' }}>{feed.event_type}</span></Text> </GridItem>
                          <GridItem rowSpan={3} colSpan={1}> <Text><span style={{ color: '#B18037' }}>Duration: </span> <span style={{ fontWeight: 'bold' }}>{feed.duration}</span></Text> </GridItem>
                          <GridItem rowSpan={2} colSpan={1}> <Text><span style={{ color: '#B18037' }}>Participants: </span> <span style={{ fontWeight: 'bold' }}>{feed.participants}</span></Text> </GridItem>
                          <GridItem rowSpan={3} colSpan={1}> <Text><span style={{ color: '#B18037' }}>Event Schedule: </span> <span style={{ fontWeight: 'bold' }}>{feed.event_schedule}</span></Text> </GridItem>
                          <GridItem rowSpan={2} colSpan={1}> <Text><span style={{ color: '#B18037' }}>Points: </span> <span style={{ fontWeight: 'bold' }}>{feed.points}</span></Text> </GridItem>
                        </Grid>
                        <p>{feed.descriere_activitate}</p>
                      </AccordionPanel>
                    </AccordionItem>

                  );
                })}
              </Accordion>
            </div>
            <div>
              <FormControl>
                <Select placeholder='Select Another City:'>
                  <option>Iasi</option>
                  <option>Botosani</option>
                  <option>Galati</option>
                  <option>Timisoara</option>
                </Select>

              </FormControl>
              <iframe title="Maps"
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.84040659259!2d27.516930545568552!3d47.15611595595363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sro!2sro!4v1663429441856!5m2!1sro!2sro'
                width="670px"
                height="370px" />
              <p align="center">Current City:<br></br>
                <span style={{ fontWeight: 'bold', color: 'green' }}>Iasi, Romania</span>
              </p>
            </div>
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </div >
  );
}
export default VFeed;