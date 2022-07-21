import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import video from "../../Files/Gymwolf_video.mp4"

import "../Video/Video.css"

const Video = () => {
  return (
    <Box className='landing-header'>
      
<Box  className='landing-video'>
      <video autoPlay muted loop>
        <source src={video} />
      </video>
      </Box>

      <Box className='landing-content'>

        {/* <div className="landing-heading">
          <h1>hello</h1>
        </div>

        <div>
          <Button>Signup</Button>
        </div>

        <form>
          <div>
            <input type="text" />
          </div>
        </form> */}

      </Box>

    </Box>
  )
}

export default Video