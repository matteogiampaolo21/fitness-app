import Link from 'next/link'
import React from 'react'

let records = {
  backSquats:[
    {weight:80,date:'23/10/21'},
    {weight:83,date:'25/11/21'},
  ],
  pullUps:[
    {weight:15,date:'28/11/21'},
    {weight:24,date:'03/12/21'}
  ]
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