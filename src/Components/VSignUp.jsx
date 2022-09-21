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
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

function VSignUp() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={["6vw", "4vw", "2.5vw"]} variant="authEffect">
            Hello, Volunteer!
          </Heading>
          <Divider orientation="horizontal" />
          <FormControl id="username">
            <FormLabel variant="authEffect">Username:</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel variant="authEffect">Email:</FormLabel>
            <Input type="email" />
          </FormControl>
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          >
            <FormControl id="password">
              <FormLabel variant="authEffect">Set Password:</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="password">
              <FormLabel variant="authEffect">Confirm Password:</FormLabel>
              <Input type="password" />
            </FormControl>
          </Stack>
          <FormControl id="town">
            <FormLabel variant="authEffect">Town/City:</FormLabel>
            <Input type="text" />
          </FormControl>
          <Stack
            direction={{ base: "line", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          >
            <Button variant="auth" bg="white"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/";
            }}>
              <ArrowBackIcon />
              Back
            </Button>
            <Button variant="auth">Sign up</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={"./SignUp1.png"} />
      </Flex>
    </Stack>
  );
}
export default VSignUp;
