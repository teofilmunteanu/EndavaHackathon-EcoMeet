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
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

function OSignUp() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading
            fontSize={["6vw", "4vw", "2.5vw"]}
            color="#072C06"
            textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
            fontFamily={"neuton"}
            fontWeight="light"
          >
            Hello, Organizer!
          </Heading>
          <Divider orientation="horizontal" />
          <FormControl id="Oname">
            <FormLabel
              color="#072C06"
              textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
              fontFamily={"neuton"}
              fontWeight="normal"
            >
              Organization Name:
            </FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel
              color="#072C06"
              textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
              fontFamily={"neuton"}
              fontWeight="normal"
            >
              Organization Email:
            </FormLabel>
            <Input type="email" />
          </FormControl>
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          >
            <FormControl id="password">
              <FormLabel
                color="#072C06"
                textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
                fontFamily={"neuton"}
                fontWeight="normal"
              >
                Set Password:
              </FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="password">
              <FormLabel
                color="#072C06"
                textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
                fontFamily={"neuton"}
                fontWeight="normal"
              >
                Confirm Password:
              </FormLabel>
              <Input type="password" />
            </FormControl>
          </Stack>
          <FormControl id="town">
            <FormLabel
              color="#072C06"
              textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
              fontFamily={"neuton"}
              fontWeight="normal"
            >
              Town/City:
            </FormLabel>
            <Input type="text" />
          </FormControl>
          <Stack
            direction={{ base: "line", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          >
            <Button
              colorScheme={"rgba(0,0,0,0)"}
              variant={"ghost"}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              borderColor="rgba(0,0,0,0)"
              color="#072C06"
              textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
              fontFamily={"neuton"}
              fontWeight="normal"
            >
              <ArrowBackIcon />
              Back
            </Button>
            <Button
              colorScheme={"gray"}
              variant={"outline"}
              color="#072C06"
              textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
              fontFamily={"neuton"}
              fontWeight="normal"
            >
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={"./SignUp1.png"} />
      </Flex>
    </Stack>
  );
}
export default OSignUp;
