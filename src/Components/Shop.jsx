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
  Center
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
       templateRows='repeat(autofill)'
       templateColumns='repeat(3,1fr)'
       gap={4}
      >
        
        {feed.map((shopitem) => {
          return (
            <GridItem rowSpan={1} colSPan={1}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
            >
              <Image src={shopitem.img} alt={property.imageAlt} />

              <Box
                //p="10"
                bg="#FFF500"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="30px"
                mt="-6"
              >
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="44"
                  >
                    {property.left} 5 left
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="bold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {property.title}
                </Box>

                <Box>
                  {property.sponsor}
                  <Box
                    as="span"
                    color="gray.600"
                    fontSize="m"
                    fontWeight="bold"
                  >
                    Subway
                  </Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  <Badge
                    borderRadius="full"
                    px="5"
                    colorScheme="#B18037"
                    fontWeight="bold"
                    bg="#B18037"
                    border="1px"
                  >
                    Price: 100XP
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
        
      </Grid>
      </Center>
  );
};
export default Shop;
