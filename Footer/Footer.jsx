import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,

} from '@chakra-ui/react';

import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


import AppStoreBadge from "../../Files/ios-button.png";
import PlayStoreBadge from '../../Files/android-button.png';
import fb_button from '../../Files/fb-button.png';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};




function Footer() {
  return (
    <Box
      bg={useColorModeValue('#26a9e1')}
      color={useColorModeValue("white")}>
      <Container as={Stack} maxW={'6xl'} py={20}>

        <SimpleGrid columns={{ base: 1, sm: 4, md: 5 }} spacing={6}>

          <Stack align={'flex-start'}>
            <Box style={{ color: "black" }}> <ListHeader >ABOUT</ListHeader></Box>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Box style={{ color: "black" }}> <ListHeader >LEGAL</ListHeader></Box>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Privacy</Link>
            <Link href={'#'}>Pricing</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Box style={{ color: "black" }}> <ListHeader >Get the app</ListHeader></Box>
            <Link href={'https://play.google.com/store/apps/details?id=com.mooncascade.gymwolf'}> <Image src={PlayStoreBadge} style={{ width: "150px" }} /></Link>
            <Link href={'https://apps.apple.com/us/app/gymwolf/id1228119580'}><Image src={AppStoreBadge} style={{ width: "150px" }} /></Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Box style={{ color: "black" }}> <ListHeader >SOCIAL</ListHeader></Box>
            <Link href={'https://www.facebook.com/gymwolf'}><Image src={fb_button} /></Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Box style={{ color: "black" }}> <ListHeader >LANGUAGE</ListHeader></Box>
            <Link href={'#'}>Eesti keeles</Link>
          </Stack>

        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>Copyright © Mooncascade OÜ. All Rights Reserved. Tel: +372 5344 5686. E-mail: info@gymwolf.com</Text>

        </Container>
      </Box>
    </Box>
  );
}

export default Footer