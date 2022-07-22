import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "./Lifted.css"


const Lifted = () => {
  return (
    <>
      <Box style={{ height: "350px", display: "flex", justifyContent: "center", backgroundColor: "#e6e7ea" }}>
        <Box className='lifted'>
          <Button>1</Button>
          <Button>1</Button>
          <Button>4</Button>
          <Button>0</Button>
          <Button>4</Button>
          <Button>7</Button>
          <Button>5</Button>
          <Button>4</Button>
          <Button>4</Button>
          <Button>1</Button>
          <span style={{ fontSize: "35px" }}>kg</span>
          <Text style={{ fontSize: "22px", textAlign: "center" }}>LIFTED USING GYMWOLF</Text>
        </Box>

      </Box>
    </>
  )
}

export default Lifted