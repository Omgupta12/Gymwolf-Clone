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
} from '@chakra-ui/react';

import { FaFacebook } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';



export default function Sign_in() {

    const navigate = useNavigate();

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>

            <Stack mx={'auto'} maxW={'lg'} py={10} px={6}>
                <Stack align={'center'}>
                    <Text fontSize={'3xl'}>Sign in</Text>
                
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            {/* <FormLabel>Email address</FormLabel> */}
                            <Input type="email" placeholder="E-mail" />
                        </FormControl>
                        <FormControl id="password">
                            {/* <FormLabel>Password</FormLabel> */}
                            <Input type="password" placeholder="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>

                            <Center>
                                <Text>-or-</Text>
                            </Center>

                            <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
                                <Center>
                                    <Text>Sign in with Facebook</Text>
                                </Center>
                            </Button>

                            <Center>
                                <Text>Not a Gymwolf user? <Link onClick={()=>navigate("/register")} style={{color:"blue"}}>Register</Link></Text>
                            </Center>

                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}