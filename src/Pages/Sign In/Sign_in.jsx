import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

import { FaFacebook } from "react-icons/fa";

import { useNavigate } from "react-router-dom";



export default function Sign_in() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [inputText, setinputText] = useState({
    email: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    setError("");
    if (inputText.email == "") {
      setError(<Text color="red">"Email is mandatory field!"</Text>);
    } else if (inputText.password == "") {
      setError(<Text color="red">"Password is mandatory field!"</Text>);
    } else {
      alert("Successfully Logged In");
      
      navigate("/")
    }

    setinputText({ email: "", password: "" });
  };

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setinputText((oldvalues) => {
      console.log(oldvalues);
      return {
        ...oldvalues,
        [name]: value,
      };
    });
  };



  return (
    <Flex
    spacing={15}

      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack mx={"auto"} maxW={"xl"} py={12} px={6} style={{marginTop:"40px"}}>
        <Stack align={"center"}>
          <Text fontSize={"3xl"}>Sign in</Text>
        </Stack>

        <Box
        style={{width:"500px",height:"500px"}}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
         >
          <Stack spacing={10}>
            <Text className="error">{error}</Text>

       
           <form onSubmit={submitForm} >
           <Stack spacing={15}>
              <FormControl className="input_text">
                <Input
                  type="email"
                  value={inputText.email}
                  name="email"
                  onChange={inputEvent}
                  autoComplete="false"
                  placeholder="E-mail"
                />
              </FormControl>
        
              <FormControl className="input_text">
                <Input
                  type="password"
                  value={inputText.password}
                  onChange={inputEvent}
                  name="password"
                  placeholder="Password"
                />
              </FormControl>
           
            
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                 
                >
                  Sign in
                </Button>

                <Center>
                  <Text>-or-</Text>
                </Center>

                <Button
                  w={"full"}
                  colorScheme={"facebook"}
                  leftIcon={<FaFacebook />}
                >
                  <Center>
               <Link href="https://www.facebook.com/v2.12/dialog/oauth?client_id=136202333101859&state=114c31832d3b13b94650a6f26c7f0e90&response_type=code&sdk=php-sdk-5.6.2&redirect_uri=https%3A%2F%2Fwww.gymwolf.com%2Ffacebook_login%2F&scope=email%2Cpublic_profile">Sign in with Facebook</Link>
                  </Center>
                </Button>

                <Center>
                  <Text>
                    Not a Gymwolf user?{" "}
                    <Link
                      onClick={() => navigate("/register")}
                      style={{ color: "blue" }}
                    >
                      Register
                    </Link>
                  </Text>
                </Center>
              </Stack>

            </form>

          </Stack>
        </Box>

      </Stack>
    </Flex>
  );
}


