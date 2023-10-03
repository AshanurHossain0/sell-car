import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-screen h-screen overflow-hidden relative'>
        <img className='object-cover' src='/poster.jpg' />
        <Link className=' rounded-full text-4xl top-[150px] left-[150px] absolute h-auto bg-green-600 p-4 text-white' to="/page/1">Click me to see our cars</Link>
    </div>
  )
}

export default Home