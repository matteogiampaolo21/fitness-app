import React from 'react'

function intakeLayout({
    children,
    records,
}:{
    children:React.ReactNode 
    records:React.ReactNode
}) {
  return (
    <div className='mx-auto w-1240 my-20'>
        {children}
        <div className='grid grid-cols-2 gap-5 mt-10'>
            {records}

        </div>
    </div>
  )
}

export default intakeLayout;