import React from 'react'

const Page = ({goToPage, pageNo,currentPageNo}) => {
  return (
    <div onClick={()=>goToPage(pageNo)} className={`font-medium cursor-pointer w-[35px] h-[35px] rounded-lg flex justify-center
     items-center ${currentPageNo==pageNo?"bg-blue-300":"bg-blue-50"}`}>
        {pageNo}
    </div>
  )
}

export default Page