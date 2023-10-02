import React from 'react'

const Car = ({car}) => {
  return (
    <div className='w-[30%] h-[400px] bg-blue-100 flex flex-col items-center gap-3 p-4 rounded-2xl'>
      <img src={car.image} className='w-[80%] h-[50%] rounded-lg' />
      <div className="title w-full flex justify-evenly items-center">
        <h2 className='text-2xl font-semibold '>{car.name}</h2>
        <h5 className='font-semibold border border-blue-500 px-2 border-dashed rounded-xl'>{car.launchYear}</h5>
      </div>
      <div className="info w-[80%] flex flex-wrap justify-center">
        <div className="seat w-1/2">
          <span>{car.seat} People</span>
        </div>
        <div className="fuel w-1/2">
          <span>{car.fuel}</span>
        </div>
        <div className="milage w-1/2">
          <span>{car.milage} Km / 1-litre</span>
        </div>
        <div className="drive w-1/2">
          <span>{car.drive}</span>
        </div>
      </div>
      <div className="price"></div>
    </div>
  )
}

export default Car