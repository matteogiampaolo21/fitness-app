'use client'
import React, { useEffect, useState } from 'react'
import { Records} from '../page'
import { getDoc, doc, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../../../../firebase/firebaseConfig'
import { useParams, useRouter } from 'next/navigation'



const Page = () => {
  const params = useParams<{exercise:string}>();
  const router = useRouter();
  
  const [weight,setWeight] = useState(0);
  const [records, setRecords] = useState<Records>({});
  const [isLoading, setLoading] = useState(true)
  
  async function getData(){
    const docRef = doc(db, "records", "ZJgsvvE5ArG3KWH1JxUX");
    const docSnap = await getDoc(docRef);
  
  
    if (docSnap.exists()) {
      console.log(docSnap.data()[params.exercise][0].date);
      console.log(docSnap.data()[params.exercise]);
      // const now = new Date()
      // const date = Timestamp.fromDate(now);
      // console.log(date.toDate())
      setRecords( docSnap.data()  );
      setLoading(false)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getData();
  },[])

  async function handleSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();

    if(weight === 0 ){
      alert("Please enter a weight.")
      return
    }

    const tempArray = records[params.exercise];
    tempArray.push({weight:weight,date: Timestamp.fromDate(new Date())})


    const recordRef = doc(db, "records", "ZJgsvvE5ArG3KWH1JxUX");

    // Set the "capital" field of the city 'DC'
    await updateDoc(recordRef, {
      [params.exercise]: tempArray,
    });

    // records[params.exercise].push({weight:weight,date: Timestamp.fromDate(new Date())})
    setWeight(0)
  }

  async function deleteEntry(timeOfEntry:number){
    const updatedLogs = records[params.exercise].filter((entry) => entry.date.toDate().getTime() !== timeOfEntry)
    
    
    const recordRef = doc(db, "records", "ZJgsvvE5ArG3KWH1JxUX");
    
    // Set the "capital" field of the city 'DC'
    await updateDoc(recordRef, {
      [params.exercise]: updatedLogs,
    });

    const tempArray = records[params.exercise].filter(entry =>
      entry.date.toDate().getTime() !== timeOfEntry
    )
    setRecords(prev => {
      return {
        ...prev,
        [params.exercise]: tempArray,
      }
    })
    console.log("entry deleted");
    // console.log(records)
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

          {isLoading ?
            <div>loading</div>
            :
            <div>
              {records[params.exercise].map((entry:{weight:number,date:Timestamp}) => {
                return (
                  <li  className='flex flex-row gap-5 mb-3 group duration-200'  key={entry.date.toDate()}>
                    <p>
                      {entry.weight}KG | {`${entry.date.toDate()}`}
                    </p>
                    <button onClick={() => deleteEntry(entry.date.toDate().getTime())} className={`bg-neutral-300 rounded invisible group-hover:visible px-2 hover:bg-red-500 hover:text-white duration-200`}>Delete</button>
                  </li>
                )
              })}
            </div>
          
          }
        </ul>
      </article>
    </div>
  )
}

export default Page