import React from "react";
import {
  Box,
  Image,
  Badge,
  Icon,
  Button,
  ButtonGroup,
  Grid,
  SimpleGrid,
  GridItem,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";

const Shop = ({ feed }) => {
  const property = {
    imageSource: "./Rectangle 65.png",
    imageAlt: "Sponsor Image",
    title: "Subway Coupon",
    sponsor: "Sponsor:",
    price: 100,
  };

  return (
    <Center>
      <Grid
        templateRows="repeat(autofill)"
        templateColumns="repeat(3,1fr)"
        gap={20}
        mt="20"
      >
        {feed.map((shopitem) => {
          return (
            <GridItem rowSpan={1} colSPan={1}>
              <Box borderWidth="1px" borderRadius="lg">
                <Image src={shopitem.img} alt={property.imageAlt} />

                <Box
                  p="6"
                  bg={shopitem.color}
                  boxShadow={shopitem.boxShadow}
                  borderRadius="30px"
                  overflow={"hidden"}
                  mt="-6"
                >
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Badge
                      borderRadius="full"
                      px="5"
                      colorScheme="#B18037"
                      fontWeight="bold"
                      border="1px"
                      bg="rgba(154, 88, 88, 0.35)"
                      ml="24"
                    >
                      <Text fontWeight="bold" fontSize="10">
                        {shopitem.pieces_left}
                      </Text>
                    </Badge>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {shopitem.coupon_title}
                  </Box>
                  <Box display="flex" alignItems="baseline">
                    <Box as="span" color="black" fontSize="m" fontWeight="bold">
                      Sponsor:
                    </Box>

                    <Box>{shopitem.sponsor}</Box>
                  </Box>
                  <Box display="flex" mt="2" alignItems="center">
                    <Badge
                      borderRadius="full"
                      px="5"
                      colorScheme="#B18037"
                      fontWeight="bold"
                      border="1px"
                      bg="rgba(154, 88, 88, 0.35)"
                    >
                      Price: {shopitem.price}
                    </Badge>
                    <Button
                      bg="rgba(255, 255, 255, 0.35)"
                      border="1px solid #D58A1B"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="10px"
                      size="md"
                      ml="44"
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Box>
            </GridItem>
          );
        })}
        <Flex
          position="sticky"
          bgGradient="linear(270deg, rgba(50, 176, 100, 0.65) 0%, rgba(255, 203, 48, 0.65) 98.27%)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="10px"
          w="24"
          h="20"
          justifyContent="center"
          justify="right"
          opacity="0.8"
        >
          <Text mt="4" ml="-3" justifyContent="center">
            Your XP:
          </Text>
          <Text mt="10" ml="-12" fontWeight="extrabold" fontSize="2xl">
            420
          </Text>
        </Flex>
      </Grid>
    </Center>
  );
};
export default Shop;