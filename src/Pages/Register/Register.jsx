import { Input, Link } from '@chakra-ui/react'
import React from 'react'

const Register = () => {
  return (
    <div>

      <Link href={'#'}>Start free</Link>

      <form style={{display:"inline-block"}} >
        <input type="text" placeholder='Email'style={{backgroundColor:"white"}}/>
        <button type='submit' style={{backgroundColor:"#26a9e1"}}> Register</button>
      </form>

    </div>
  )
}

export default Register