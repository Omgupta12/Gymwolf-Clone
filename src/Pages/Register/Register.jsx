import {
  Input,
  Link,
  Text,
  Container,
  Button,
  Center,
  Box,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Register.css";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Register = () => {

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [inputText, setinputText] = useState({ email: "" });


  const submitForm = (e) => {
    e.preventDefault();
    setError("");
    if (inputText.email == "") {
      setError(<Text color="red">"Email is mandatory field!"</Text>);
    }
    else {
      alert("Registaion Successfull");

      navigate("/signin")
    }

    setinputText({ email: "" });
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
    <Container style={{ border: "1px solid white", marginBottom: "5rem" }}>
      <Center>
        <Box> <Text style={{ width: "200px" }}>{error}</Text></Box>
        
        <form onSubmit={submitForm} className="register-main-div">
          
          <Box>
            <input
              type="email"
              value={inputText.email}
              name="email"
              onChange={inputEvent}
              autoComplete="false"
              placeholder="Your E-mail address"
              className="register-input"
            />
          </Box>
          <Box>
            <button type="submit" className="register-btn" onClick={submitForm}> Register</button>
          </Box>
             </form>
      </Center>

      <Stack>
        <Center>
          <Text>-or-</Text>
        </Center>

        <Center>
          <Button size="lg" colorScheme={"facebook"} leftIcon={<FaFacebook />}>
            <Center>
              <Link href="https://www.facebook.com/v2.12/dialog/oauth?client_id=136202333101859&state=114c31832d3b13b94650a6f26c7f0e90&response_type=code&sdk=php-sdk-5.6.2&redirect_uri=https%3A%2F%2Fwww.gymwolf.com%2Ffacebook_login%2F&scope=email%2Cpublic_profile">Sign in with Facebook</Link>
            </Center>
          </Button>

        </Center>
        <Center>
          <Text>
            By signing up you agree to the <Link>Terms of Service</Link> of Gymwolf.{" "}

          </Text>
        </Center>

      </Stack>

    </Container>
  );
};

export default Register;
