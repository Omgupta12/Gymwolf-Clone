import { Box, Button, Heading, Spacer, Stack, Text, Link, Center, flexbox } from '@chakra-ui/react'
import React from 'react'
import video from "../../Files/Gymwolf_video.mp4"
import Navbar from "../../Components/Navbar/Navbar"
import "../Video/Video.css"

import { BiChevronRightCircle } from 'react-icons/bi'
import Register from '../Register/Register'
import { useNavigate } from 'react-router-dom'

const Video = () => {

  const navigate=useNavigate()
  return (
    <>
      <Box style={{ marginBottom: "9%", boxSizing: "border-box" }}>

        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>


        <header>
          <Navbar />
        </header>

        <Box className="overlay">

          <Box>
            <Heading className='heading' >A better way to track your workouts</Heading>
  
          </Box>

          <Box>
            <Button colorScheme='white' bg='#26a9e1' size='md'
              height='60px'
              width='250px'
              border='2px'
              borderColor="#26a9e1"
              _hover={{ bg: '#428bca' }}
              onClick={()=>navigate("/register")}
            >
              <Text fontSize="2xl"> Start free</Text>
            </Button>
          </Box>

          <Box style={{marginTop:"20px"}} >
            <Link href={'#'} className="link" >See how it works
            </Link>
            <BiChevronRightCircle style={{ margin: "5px 0px 0px 5px" }} />
          </Box>

        </Box>

      </Box>

    </>
  )
}

export default Video