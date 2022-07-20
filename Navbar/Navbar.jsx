import React from 'react'
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';

import { MoonIcon, SunIcon, Search2Icon } from '@chakra-ui/icons';



const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);


const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Box bg={useColorModeValue('rgba(0,0,0, 0.25)')} px={4} style={{ position: "fixed", width: "100%"}}>
        
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <img src={"https://www.gymwolf.com/img/gymwolf.png"} />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={6}>

              {/* Register,sign-in,search-icon button */}

              <Button style={{backgroundColor:"transparent", color:"white"}}>Register</Button>
              <Button style={{backgroundColor:"transparent", color:"white"}}>Sign in</Button>
              <Button><Search2Icon /></Button>
        
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar