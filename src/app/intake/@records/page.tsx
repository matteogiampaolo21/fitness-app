import Link from 'next/link'
import React from 'react'

export let records:Records = {
  backSquats:[
    {weight:80,date:new Date('October 23, 2021')},
    {weight:83,date:new Date('November 04, 2021')},
    {weight:97,date:new Date('November 05,2021')},
  ],
  pullUps:[
    {weight:15,date:new Date('January 15, 2022')},
    {weight:24,date:new Date('April 18, 2022')}
  ]
}

export type Records = {
  [key:string]:{
   weight:number,
   date:Date, 
  }[]
}

function page() {
  return (
    <article className='border-black border rounded p-3'>
      <h2 className='text-lg'>Personal Records</h2>


      <ul className='list-disc ml-10'>
        {Object.keys(records).map((exercise) => {
          return(
            <li key={exercise}>
              <Link className='hover:text-blue-500' href={`/intake/${exercise}`}>
                {exercise}
              </Link>
            </li>
          )
        })}

      </ul>
    </article>
  )
}

export default page