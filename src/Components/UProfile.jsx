import React from "react";
import { Box, Text} from "@chakra-ui/react"
import {Editable,EditableInput,EditableTextarea,EditablePreview} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
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
    Link
  } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'

function UProfile(){
    return(
        <Grid
            h='700px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={10}
            ml="30"
            mr="30"
            mt="150"
        >
            <GridItem colSpan={1} rolSpan={2} bg="#D0FEBF" >
                <Text ml="-40" textAlign={['left', 'center']} mt="10" fontSize="4xl"  fontWeight="extrabold"> Charles Ludwigsten</Text>
                <Text fontSize="2xl" ml="204">
                  charles.ludwisgten2@gmail.com  
                </Text>
                <Text fontSize="xl" ml="204" fontWeight="bold">
                    Iasi, Romania
                </Text>
                <Text fontSize="3xl" ml="204" fontWeight="bold" mt="45">
                    Level 10
                </Text>
                <Text fontSize="2xl" ml="204" >
                    20/50 EXP
                </Text>
            </GridItem>
            <GridItem colSpan={1} rolSpan={2} bg="#D0FEBF" >
            </GridItem>
            <GridItem colSpan={1} rolSpan={2} bg="#D0FEBF" >
                <Text textAlign={['left', 'center']} fontSize="3xl" fontWeight="bold">Bio:</Text>
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    <GridItem w='100%' h='10'  ><Text fontWeight="bold" fontSize="xl" ml="15">Gender: Male</Text></GridItem>
                    <GridItem w='100%' h='10'><Text fontWeight="bold" fontSize="xl">Age:24</Text></GridItem>
                    <GridItem w='100%' h='10'><Text fontWeight="bold" fontSize="xl">Joined: 5/06/22</Text></GridItem>
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={0}>
                    <GridItem colSpan={1} h='10' ml="15">
                        <Text fontWeight="bold" fontSize="xl">Work:</Text>
                    </GridItem>
                    <GridItem colStart={4} colEnd={2} h='10' >
                        <Editable defaultValue='Type here:' fontSize="xl" fontWeight="bold" mt="-1">
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
                    </GridItem>
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={0}>
                    <GridItem colSpan={1} h='10' ml="15">
                        <Text fontWeight="bold" fontSize="xl">Activities:</Text>
                    </GridItem>
                    <GridItem colStart={7} colEnd={2} h='10' >
                        <Editable defaultValue='Type here:' fontSize="xl" fontWeight="bold" mt="-1">
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
                    </GridItem>
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={0}>
                    <GridItem colSpan={1} h='10' ml="15">
                        <Text fontWeight="bold" fontSize="xl" mt="9">Your description:</Text>
                    </GridItem>
                    <GridItem colStart={7} colEnd={2} h='10' >
                        <Editable defaultValue='type' fontSize="xl" fontWeight="bold" mt="9" ml="15">
                                    <EditablePreview />
                                    <EditableInput />
                        </Editable>
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem colSpan={1} rolSpan={2} bg="#D0FEBF" />
          </Grid>
    )
}

export default UProfile;