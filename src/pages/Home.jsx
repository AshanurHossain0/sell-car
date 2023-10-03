import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-screen h-screen bg-blue-100 flex justify-center items-center'>
        <Link className='text-blue-900 text-4xl h-[20%]' to="/page/1">See Our Cars</Link>
    </div>
  )
}

export default Home