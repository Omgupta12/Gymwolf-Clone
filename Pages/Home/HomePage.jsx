import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Video from '../Video/Video'
import "./Home.css"


const HomePage = () => {

  return (
    <>
  <Box >
    <Video/>
      {/* Online-Personal-trainer-Box Start*/}

      <Box className='home_personal-trainer-main-box'>

        <Box className='home_personal-trainer-left'>

          <Box style={{ width: "60%", display: "flex", flexDirection: "column", marginLeft: "5rem" }}>

            <Box className='home_personal-trainer-heading'> <Heading>Online personal trainer</Heading></Box>
            <Box className='home_personal-trainer-para'> <Text>Gymwolf has certified personal trainers that provide you with customised workout plans depending on your goals. Our trainers track your progress, coach and motivate you daily through our web and smartphone app.</Text></Box>
            <Button colorScheme='white' bg='#041628' size='md'
              height='60px'
              width='250px'
              border='2px'
              borderColor='#041628'
            >
              Learn More
            </Button>

          </Box>

        </Box>

        <Box className='home_personal-trainer-img'> </Box>

      </Box>

      {/* Online-Personal-trainer-Box End*/}


      {/* Features-Box Start*/}

      <Box className='home_features-main-box'>

        <Box className='home_features-left'>

          <Box style={{ width: "60%", display: "flex", flexDirection: "column", marginLeft: "5rem" }}>

            <Box className='home_features-heading'> <Heading>Features</Heading></Box>
            <Box className='home_features-para'> <Text>Gymwolf is a workout tracking tool. Add workouts, create your own customized workout plans or find suitable plan from other users. Accomplish your goals with motivation from personal trainer and committed training.</Text></Box>
            <Button colorScheme='white' bg='#26a9e1' size='md'
              height='60px'
              width='250px'
              border='2px'
              borderColor="#26a9e1"
            >
              Take a tour
            </Button>

          </Box>

        </Box>

        <Box className='home_features-img'> </Box>

      </Box>

      {/* Features-Box End*/}


      {/*See your progress Box Start*/}

      <Box className='home_progress-main-box'>

        <Box className='home_progress-left'>

          <Box style={{ width: "60%", display: "flex", flexDirection: "column", marginLeft: "18rem" }}>

            <Box className='home_progress-heading'> <Heading>See your progress</Heading></Box>
            <Box className='home_progress-para'> <Text>Gymwolf provides different graphs that help you track your progress. There are graphs for gym workouts, cardio workouts and bodyweight. The graphs are highly customizable: you can select the date range, exercise and group the results by month, week or single workout.</Text></Box>
            <Button colorScheme='white' bg='#26a9e1' size='md'
              height='60px'
              width='250px'
              border='2px'
              borderColor="#26a9e1"
              padding="20px"
            >
              Take a tour
            </Button>

          </Box>

        </Box>

        <Box className='home_progress-img'> </Box>

      </Box>

      {/* See your progress Box End*/}


      {/* Database Box Start*/}

      <Box className='home_database-main-box'>

        <Box className='home_database-left'>

          <Box style={{ width: "67%", display: "flex", flexDirection: "column", marginLeft: "5rem" }}>

            <Box className='home_database-heading'> <Heading>Database with 300+ exercises</Heading></Box>
            <Box className='home_database-para'> <Text>Gymwolf has a database with over 300 exercises. The exercises come with detailed descriptions, tips and step-by-step images. If you don't find a exercise from our database, then you can also add your own exercises.</Text></Box>
            <Button colorScheme='white' bg='#26a9e1' size='md'
              height='60px'
              width='250px'
              border='2px'
              borderColor="#26a9e1"
            >
              Check out
            </Button>

          </Box>

        </Box>

        <Box className='home_database-img'> </Box>

      </Box>

      {/* Database Box End*/}

      </Box>
    </>
  )
}

export default HomePage