import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faUserGroup,faGasPump,faGauge,faCar} from '@fortawesome/free-solid-svg-icons'

const Car = ({car}) => {
  return (
    <div className='w-[30%] h-[400px] bg-blue-100 flex flex-col items-center gap-3 p-4 rounded-2xl'>
      <img src={car.image} className='w-[80%] h-[50%] rounded-lg' />
      <div className="title w-[80%] flex justify-between items-center">
        <h2 className='text-2xl font-semibold '>{car.name}</h2>
        <h5 className='font-semibold border border-blue-500 px-2 border-dashed rounded-xl'>{car.launchYear}</h5>
      </div>
      <div className="info w-[80%] flex flex-wrap justify-center ">
        <div className="seat w-1/2 flex gap-2 items-center">
          <FontAwesomeIcon icon={faUserGroup} style={{color:"#419AF9"}} />
          <span className='font-medium'>{car.seat} People</span>
        </div>
        <div className="fuel w-1/2 flex gap-2 items-center">
          <FontAwesomeIcon icon={faGasPump} style={{color:"#419AF9"}} />
          <span className='font-medium'>{car.fuel}</span>
        </div>
        <div className="milage w-1/2 flex gap-2 items-center">
          <FontAwesomeIcon icon={faGauge} style={{color:"#419AF9"}} />
          <span className='font-medium'>{car.milage} Km / 1-litre</span>
        </div>
        <div className="drive w-1/2 flex gap-2 items-center">
          <FontAwesomeIcon icon={faCar} style={{color:"#419AF9"}} />
          <span className='font-medium'>{car.drive}</span>
        </div>
      </div>
      <div className="price w-[80%] flex justify-between border-gray-300 border-t py-4 items-center">
        <p className=""><span className='text-2xl font-semibold'>${car.charge}</span> /month</p>
        <div className="flex  items-center gap-4">
          <FontAwesomeIcon icon={faHeart} style={{fontSize:"20px",color:"#419AF9", backgroundColor:"#B9D9FC",padding:"6px",borderRadius:"6px"}} />
          <button className='bg-blue-500 text-white px-2 py-1 rounded-lg'>Rent now</button>
        </div>
      </div>
    </div>
  )
}

export default Car