import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { search } from '../store/carSlice';
import { data } from "../carData"
import Car from '../components/Car';
import Page from '../components/Page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const Cars = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  id=parseInt(id);
  const navigate = useNavigate();

  const { searchQuery } = useSelector(state => state.car)
  const filteredCars = data?.filter(car => car.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const showCars=filteredCars.slice((6*id-6),(6*id))

  if(filteredCars.length<=(id-1)*6) navigate("/page/1")

  const start=id*6-5;
  const end=filteredCars.length<6*id?(filteredCars.length):(6*id)

  const prevPage = () => {
    if (id < 2) return;
    navigate(`/page/${id - 1}`)
  }

  const nextPage = () => {
    if (id > 9) return;
    if(filteredCars.length<= id*6) return;
    navigate(`/page/${id + 1}`)
  }

  const goToPage = (pageNo) => {
    if(filteredCars.length <= (pageNo-1)*6) return;
    navigate(`/page/${pageNo}`)
  }

  return (
    <div className='w-screen bg-blue-200 min-h-screen flex flex-col px-3 gap-3'>
      <div className='header w-full bg-blue-100 h-16 rounded-2xl flex justify-start gap-10 items-center'>
        <input onChange={(e) => dispatch(search(e.target.value))} type="text" placeholder='Search...' className=' ml-10 h-9 w-1/5 pl-4 rounded-2xl outline-none border border-gray-300' />
      </div>
      <div className='content w-full flex flex-wrap gap-x-10 gap-y-3 justify-center min-h-[650px]'>
        {
          showCars.map(car => (<Car key={car.id} car={car} />))
        }
      </div>
      <div className='footer  w-full bg-blue-100 h-20 mb-4 rounded-2xl flex items-center px-10 justify-between'>
        <div className="font-medium text-lg">{start} to {end}</div>
        <div className=" flex gap-4 height-[35px] items-center">
          <div onClick={prevPage} className='cursor-pointer h-[35px] w-[35px] bg-blue-50 rounded-lg flex justify-center items-center'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          {
            [...Array(10)].map((_, i) => (
              <Page goToPage={goToPage} pageNo={i+1} key={i} currentPageNo={id} />
            ))
          }
          <div onClick={nextPage} className='cursor-pointer h-[35px] w-[35px] bg-blue-50 rounded-lg flex justify-center items-center'>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars