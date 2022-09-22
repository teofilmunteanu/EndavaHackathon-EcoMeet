import {Button, Flex, Center, Select, Text, FormControl, FormLabel, Heading, Input, Stack, Image, Divider, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
import {CalendarIcon, Search2Icon, DeleteIcon} from '@chakra-ui/icons'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'
import React from 'react';
import {useState} from 'react';



function VFeed() {
  const [buttonText, setButtonText] = useState("Join");
  const changeText = (text) => setButtonText(text);

  return (
    
    <Tabs isFitted variant='enclosed' colorScheme='green'>
    <TabList mb='1em'>
      <Tab><Search2Icon/> &nbsp;&nbsp; <span style={{fontWeight: 'bold'}}>Events In Your Area</span></Tab> 
      <Tab> <CalendarIcon/> &nbsp;&nbsp; <span style={{fontWeight: 'bold'}}>Your Events</span></Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        align={'center'}
        justify={'space-between'}>  
      <Accordion defaultIndex={[0]}>
  <AccordionItem>
  <Stack
        direction={{ base: 'line', sm: 'row' }}
        align={'start'}
        justify={'space-between'}>
    
      <AccordionButton>
      <Image
          boxSize='100px'
          alt={'1 Image'}
          src={"./1.jpg"}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <Box flex='1' textAlign='left'>
        <span style={{fontWeight: 'bold'}}>Planting trees in Palas Mall!</span><br></br>
        Endava<br></br><br></br>
        <span style={{fontWeight: 'bold'}}>Date: 28/09/2022</span>
        </Box>
        <div>
        <Button colorScheme='green' variant='outline'> Join</Button>
        &nbsp;<br></br><br></br>
        <p> <span style={{fontWeight: 'bold'}}>5/20 <DeleteIcon/> &nbsp;&nbsp;&nbsp; 10 pts </span></p>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AccordionIcon />
      </AccordionButton>
      </Stack>
    <AccordionPanel pb={4}>
    Un site wiki este un site proiectat pentru ca grupurile de persoane să capteze și să împărtășească rapid idei prin crearea de pagini simple și legarea lor. Organizația dvs. poate utiliza un wiki pentru o varietate de utilizări. La scară largă, puteți partaja volume mari de informații într-un wiki de întreprindere. La o scară mai mică, puteți utiliza un site de echipă ca pe un wiki pentru a colecta și a împărtăși rapid idei despre un proiect.
    </AccordionPanel>
  </AccordionItem>
  

  <AccordionItem>
  <Stack
        direction={{ base: 'line', sm: 'row' }}
        align={'start'}
        justify={'space-between'}>
    
      <AccordionButton>
      <Image
          boxSize='100px'
          alt={'2 Image'}
          src={"./2.jpg"}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <Box flex='1' textAlign='left'>
        <span style={{fontWeight: 'bold'}}>Cleaning The Ciric Forest!</span><br></br>
        Endava<br></br><br></br>
        <span style={{fontWeight: 'bold'}}>Date: 28/09/2022</span>
        </Box>
        <div>
        <Button colorScheme='green' variant='outline'> Join</Button>
        &nbsp;<br></br><br></br>
        <p> <span style={{fontWeight: 'bold'}}>5/20 <DeleteIcon/> &nbsp;&nbsp;&nbsp; 10 pts </span></p>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AccordionIcon />
      </AccordionButton>
      </Stack>
    <AccordionPanel pb={4}>
    Un site wiki este un site proiectat pentru ca grupurile de persoane să capteze și să împărtășească rapid idei prin crearea de pagini simple și legarea lor. Organizația dvs. poate utiliza un wiki pentru o varietate de utilizări. La scară largă, puteți partaja volume mari de informații într-un wiki de întreprindere. La o scară mai mică, puteți utiliza un site de echipă ca pe un wiki pentru a colecta și a împărtăși rapid idei despre un proiect.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
  <Stack
        direction={{ base: 'line', sm: 'row' }}
        align={'start'}
        justify={'space-between'}>
    
      <AccordionButton>
      <Image
          boxSize='100px'
          alt={'3 Image'}
          src={"./3.jpg"}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <Box flex='1' textAlign='left'>
        <span style={{fontWeight: 'bold'}}>Doing something ECO in Iasi!</span><br></br>
        Endava<br></br><br></br>
        <span style={{fontWeight: 'bold'}}>Date: 28/09/2022</span>
        </Box>
        <div>
        <Button colorScheme='green' variant='outline'> Join</Button>
        &nbsp;<br></br><br></br>
        <p> <span style={{fontWeight: 'bold'}}>5/20 <DeleteIcon/> &nbsp;&nbsp;&nbsp; 10 pts </span></p>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AccordionIcon />
      </AccordionButton>
      </Stack>
    <AccordionPanel pb={4}>
      Text 3
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<div>
<FormControl>
  <Select placeholder='Select Another City:'>
    <option>Iasi</option>
    <option>Botosani</option>
    <option>Galati</option>
    <option>Timisoara</option>
  </Select>
  
</FormControl>
<iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.84040659259!2d27.516930545568552!3d47.15611595595363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sro!2sro!4v1663429441856!5m2!1sro!2sro'
    alt='demo'
    width="700px" 
    height="500px"/>
    <p align="center">Current City:<br></br>
    <span style={{fontWeight: 'bold',  color: 'green' }}>Iasi, Romania</span>
    </p> 
  </div> 
</Stack>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs> 
  );
}
export default VFeed;