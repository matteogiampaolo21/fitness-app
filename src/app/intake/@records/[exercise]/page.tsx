'use client'
import React, { useState } from 'react'
import { records} from '../page'
import { useParams, useRouter } from 'next/navigation'

const Page = () => {
  const params = useParams<{exercise:string}>();
  const router = useRouter();

  const [weight,setWeight] = useState(0)

  console.log(typeof params.exercise);

  function handleSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();

    if(weight === 0 ){
      alert("Please enter a weight.")
      return
    }

    records[params.exercise].push({weight:weight,date:new Date()})
    setWeight(0)
  }

  function deleteEntry(timeOfEntry:number){
    console.log("entry deleted");
    console.log(records[params.exercise])
    const updatedLogs = records[params.exercise].filter((entry) => entry.date.getTime() !== timeOfEntry)
    console.log(updatedLogs)

  }


  return (
    <div>
      <button onClick={() => router.back()} className='mb-5 hover:ml-2 duration-200 hover:text-blue-500'>Previous page </button>

      <form>
        <label>
          <h2 className='font-bold text-lg'>New Entry: <br /></h2>

          <p className='text-xs text-neutral-700 mb-1'>Input your new entry</p>
          <input onChange={(e) => setWeight(parseInt(e.currentTarget.value)) } value={weight} placeholder='Input new entry' className='mb-5 pl-2 py-1 border-black border rounded' type="number" />
        </label>
        <button onClick={(e) => handleSubmit(e)} className='bg-blue-500 duration-200 hover:bg-blue-700 fontb text-white h-9 px-2 rounded ml-2'>Submit</button>
      </form>

      <article className='border-black border rounded p-3'>
        <h2 className='text-lg font-bold'>{params.exercise} records</h2>

        <ul>
          {records[params.exercise].map((entry) => {
            return (
              <li  className='flex flex-row gap-5 mb-3 group duration-200'  key={entry.date.getTime()}>
                <p>
                  {entry.weight}KG | {entry.date.getTime()}
                </p>
                <button onClick={() => deleteEntry(entry.date.getTime())} className={`bg-neutral-300 rounded invisible group-hover:visible px-2 hover:bg-red-500 hover:text-white duration-200`}>Delete</button>
              </li>
            )
          })}
        </ul>
      </article>
    </div>
  )
}

export default Page