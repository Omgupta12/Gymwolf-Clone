import React from 'react'
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  Image 
} from '@chakra-ui/react';

import { Search2Icon } from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
      <Box bg={useColorModeValue('rgba(0,0,0, 0.25)')} px={4} style={{ position: "fixed", width: "100%"}}>
        
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image src={"https://www.gymwolf.com/img/gymwolf.png"} onClick={()=>navigate("/")} style={{cursor:"pointer"}}/>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={6}>

              {/* Register,sign-in,search-icon button */}

              <Button style={{backgroundColor:"transparent", color:"white"}} onClick={()=>navigate("/register")}>Register</Button>
              <Button style={{backgroundColor:"transparent", color:"white"}} onClick={()=>navigate("/signin")}>Sign in</Button>
              <Button  style={{backgroundColor:"transparent", color:"white"}}><Search2Icon /></Button>
        
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar