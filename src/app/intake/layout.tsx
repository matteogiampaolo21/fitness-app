import React from 'react'

function intakeLayout({
    children,
    records,
    calories,
}:{
    children:React.ReactNode 
    records:React.ReactNode
    calories:React.ReactNode
}) {
  return (
    <div className='mx-auto w-1240 my-20'>
        {children}
        <div className='grid grid-cols-2 gap-5 mt-10'>
            {records}
            {calories}

        </div>
    </div>
  )
}

export default intakeLayout;