import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
<>
    <Link to='/'>Home</Link>
    <br />
    <Link to='/all'>All Student Details</Link>
    <br />
    <Link to='/create'>Create Students</Link>
    
    </>
  )
}

export default Home
