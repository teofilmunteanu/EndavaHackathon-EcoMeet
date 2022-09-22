import { Grid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button, Input, FormLabel, useDisclosure, ModalCloseButton, GridItem, Text, Select, Spacer, Flex, FormControl, Stack, Image, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { CalendarIcon, Search2Icon, DeleteIcon, AddIcon } from '@chakra-ui/icons'
import React from 'react';



const OFeed = ({ ofeed }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  return (
    <Tabs isFitted variant='enclosed' colorScheme='green'>
      <TabList mb='1em'>
        <Tab><Search2Icon /> &nbsp;&nbsp; <span style={{ fontWeight: 'bold' }}>Events In Your Area</span></Tab>
        <Tab> <CalendarIcon /> &nbsp;&nbsp; <span style={{ fontWeight: 'bold' }}>Your Events</span></Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            align={'center'}
            justify={'space-between'}>
            <div>
              <Accordion allowToggle backgroundColor="#FFFDF1">
                <AccordionItem w='50vw' h='8vw'>
                  <AccordionButton w='50vw' h='8vw' onClick={onOpen}>
                    <Grid templateColumns='repeat(2, 1fr)' gap={8} fontSize="25" >
                      <GridItem w='215%'><Text><span style={{ fontWeight: 'bold', color: '#B18037' }}><AddIcon /></span></Text></GridItem>
                      <GridItem w='215%'><Text><span style={{ fontWeight: 'bold', color: '#B18037' }}>Create An Event</span></Text></GridItem>
                    </Grid>

                    <Modal
                      initialFocusRef={initialRef}
                      finalFocusRef={finalRef}
                      isOpen={isOpen}
                      onClose={onClose}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader textAlign={'center'}>Create an Event</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                          <FormControl variant="floating" isRequired isInvalid>
                          <Input placeholder=" "  ref={initialRef}/>
                            <FormLabel>Event Titile:</FormLabel>
                          </FormControl>
                          <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'center'}
                            justify={'space-between'}>
                            <div>
                              <FormControl mt={4} variant="floating" isRequired isInvalid>
                                <Input placeholder=" " />
                                <FormLabel>Start Date:</FormLabel>

                              </FormControl>
                            </div>
                            <span style={{ fontWeight: 'bold' }}>_</span>
                            <div>
                              <FormControl mt={4} variant="floating" isRequired isInvalid>
                              <Input placeholder=" " />
                                <FormLabel>End Date:</FormLabel>
                              </FormControl>
                            </div>
                          </Stack>
                          <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'center'}
                            justify={'space-between'}>
                            <div>
                              <FormControl mt={4} variant="floating" id="first-name" isRequired isInvalid>
                              <Input placeholder=" " />
                                <FormLabel>Start Hour:</FormLabel>
                              </FormControl>
                            </div>
                            <span style={{ fontWeight: 'bold' }}>_</span>
                            <div>
                              <FormControl mt={4} variant="floating" id="first-name" isRequired isInvalid>
                              <Input placeholder=" " />
                                <FormLabel>End Hour:</FormLabel>
                              </FormControl>
                            </div>
                          </Stack>
                          <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            justify={'space-between'}>
                            <div>
                              <FormControl mt={4} variant="floating" id="first-name" isRequired isInvalid>
                              <Input placeholder=" " />
                                <FormLabel>Points:</FormLabel>
                              </FormControl>
                            </div>
                            <div>
                              <FormControl mt={4} variant="floating" id="first-name" isRequired isInvalid>
                              <Input placeholder=" " />
                                <FormLabel>Event Type:</FormLabel>
                              </FormControl>
                            </div>
                          </Stack>
                          <FormControl mt={4} variant="floating" id="first-name" isRequired isInvalid>
                          <Input placeholder=" " />
                            <FormLabel>Descprition:</FormLabel>
                          </FormControl>
                          <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'center'}
                            justify={'space-between'}>
                            <div>
                              <FormControl mt={4} variant="floating" id="first-name" isRequired isInvalid>
                              <Input placeholder=" " />
                                <FormLabel>Add Sponsors:</FormLabel>
                              </FormControl>
                            </div>
                            <div>
                              <FormControl mt={4} variant="floating" id="first-name" isRequired isInvalid>
                              <Input placeholder='photo' type="file" id="Photos" />
                                <FormLabel>Add Photos:</FormLabel>
                              </FormControl>
                            </div>
                          </Stack>
                        </ModalBody>
                        <ModalFooter justifyContent={'center'}>
                          <Button onClick={onClose}>Create</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                  </AccordionButton>
                </AccordionItem><br></br>
                {ofeed.map((ofeed) => {
                  return (
                    <AccordionItem w='50vw'>
                      <Stack alignItems={"center"}
                        direction={{ base: 'line', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Image
                          w="20%"
                          boxSize='100px'
                          src={ofeed.image}
                        />
                        <AccordionButton w="65%">

                          <Box flex='1' textAlign='left' alignItems={"center"}>
                            <span style={{ fontWeight: 'bold' }}>{ofeed.titlu_activitate}</span>
                            <p>{ofeed.nume_firma}</p>
                            <span style={{ fontWeight: 'bold' }}>Date: {ofeed.date}</span>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <Flex w="15%" direction={"column"}>
                          <Flex>
                            <span style={{ fontWeight: 'bold' }}>{ofeed.participanti}<DeleteIcon /> </span>
                            <Spacer />
                            <span>{ofeed.puncte} pts </span>
                          </Flex>
                        </Flex>
                      </Stack><br></br>
                      <AccordionPanel pb={4}>
                        {ofeed.descriere_activitate}
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
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.84040659259!2d27.516930545568552!3d47.15611595595363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sro!2sro!4v1663429441856!5m2!1sro!2sro' width="700px" height="500px" />
              <p align="center">Current City:<br></br>
                <span style={{ fontWeight: 'bold', color: 'green' }}>Iasi, Romania</span>
              </p>
            </div>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            align={'center'}
            justify={'space-between'}>
            <div>
              <Accordion allowToggle backgroundColor="#FFFDF1">

                {ofeed.map((ofeed) => {
                  return (
                    <AccordionItem w='50vw'>
                      <Stack alignItems={"center"}
                        direction={{ base: 'line', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Image
                          w="20%"
                          boxSize='100px'
                          src={ofeed.image}
                        />
                        <AccordionButton w="65%">

                          <Box flex='1' textAlign='left' alignItems={"center"}>
                            <span style={{ fontWeight: 'bold' }}>{ofeed.titlu_activitate}</span>
                            <p>{ofeed.nume_firma}</p>
                            <span style={{ fontWeight: 'bold' }}>Date: {ofeed.date}</span>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <Flex w="15%" direction={"column"}>
                          <Flex>
                            <span style={{ fontWeight: 'bold' }}>{ofeed.participanti}<DeleteIcon /> </span>
                            <Spacer />
                            <span>{ofeed.puncte} pts </span>
                          </Flex>
                        </Flex>
                      </Stack><br></br>
                      <AccordionPanel pb={4}>
                        <Grid
                          h='200px'
                          templateRows='repeat(6, 1fr)'
                          templateColumns='repeat(2, 1fr)'
                          gap={4}
                        >
                          <GridItem rowSpan={2} colSpan={1}> <Text><span style={{ color: '#B18037' }}>Event Type: </span> <span style={{ fontWeight: 'bold' }}>{ofeed.event_type}</span></Text> </GridItem>
                          <GridItem rowSpan={3} colSpan={1}> <Text><span style={{ color: '#B18037' }}>Duration: </span> <span style={{ fontWeight: 'bold' }}>{ofeed.duration}</span></Text> </GridItem>
                          <GridItem rowSpan={2} colSpan={1}> <Text><span style={{ color: '#B18037' }}>Participants: </span> <span style={{ fontWeight: 'bold' }}>{ofeed.participants}</span></Text> </GridItem>
                          <GridItem rowSpan={3} colSpan={1}> <Text><span style={{ color: '#B18037' }}>Event Schedule: </span> <span style={{ fontWeight: 'bold' }}>{ofeed.event_schedule}</span></Text> </GridItem>
                          <GridItem rowSpan={2} colSpan={1}> <Text><span style={{ color: '#B18037' }}>Points: </span> <span style={{ fontWeight: 'bold' }}>{ofeed.points}</span></Text> </GridItem>
                        </Grid>
                        <p>{ofeed.descriere_activitate}</p>
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
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.84040659259!2d27.516930545568552!3d47.15611595595363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sro!2sro!4v1663429441856!5m2!1sro!2sro' width="700px" height="500px" />
              <p align="center">Current City:<br></br>
                <span style={{ fontWeight: 'bold', color: 'green' }}>Iasi, Romania</span>
              </p>
            </div>
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export default OFeed;