import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { search } from '../store/carSlice';
import {data} from "../carData"
import Car from '../components/Car';


const Cars = () => {
  const dispatch=useDispatch();
  const { id } = useParams();

  const {searchQuery}=useSelector(state=>state.car)
  const filteredCars=data?.filter(car=>car.name.toLowerCase().includes(searchQuery))

  return (
    <div className='w-screen bg-blue-200 min-h-screen flex flex-col px-3 gap-3'>
      <div className='header w-full bg-blue-100 h-16 rounded-2xl flex justify-start gap-10 items-center'>
        <input onChange={(e)=>dispatch(search(e.target.value))} type="text" placeholder='Search...' className=' ml-10 h-9 w-1/5 pl-4 rounded-2xl outline-none border border-gray-300' />
        <select name="" id="" className='w-1/12 bg-inherit h-9'>
          <option value="">All brands</option>
          <option value="toyota">Toyota</option>
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
        </select>
      </div>
      <div className='content w-full flex flex-wrap gap-x-10 gap-y-3 justify-center'>
        {
          filteredCars.map(car=>(<Car key={car.id} car={car} />))
        }
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default Cars