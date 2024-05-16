'use client'
import React, { useEffect, useState } from 'react'
import { getDoc,doc, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';

function Page() {

  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<{calories:number,recordedAt:Timestamp | null}>({calories:0,recordedAt:null});
  const [calInput, setInput] = useState(0);

  async function getData(){
    const docRef = doc(db, "users", "sIvBylIsqGSt15f7ze03");
    const docSnap = await getDoc(docRef);
  
  
    if (docSnap.exists()) {
      console.log(docSnap.data());
      console.log(docSnap.data());
      setUser(docSnap.data());
      setLoading(false);
 
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getData();
    console.log("UseEffect has runned.")
    // sIvBylIsqGSt15f7ze03


  },[]);


  async function addCals(){

      
    const prevCals = user?.calories;

    console.log("yay")
    const userRef = doc(db, "users", "sIvBylIsqGSt15f7ze03");

    await updateDoc(userRef, {
      calories: prevCals+calInput,
    });
    setUser(prev => {
      return {
        ...prev,
        calories: prevCals+calInput,
      }
    })


  }

  async function resetCals(){

      

    console.log("yay")
    const userRef = doc(db, "users", "sIvBylIsqGSt15f7ze03");

    await updateDoc(userRef, {
      calories: 0,
      recordedAt: Timestamp.fromDate(new Date())
    });

    setUser(prev => {
      return {
        ...prev,
        calories: 0,
        recordedAt: Timestamp.fromDate(new Date()),
      }
    })


  }

  return (
    <article className='border-black border h-max rounded p-3'>
        <h2 className='text-lg'>Calorie Intake</h2>
        {isLoading ?
          <>
            loading...
          </> 
        :
          <div>
            <p><span className='font-bold'>Calories consumed:</span> {user?.calories}</p>
            <p><span className='font-bold'>Tracking since:</span> {`${user?.recordedAt.toDate()}`}</p>
            
            <section className='grid grid-cols-5 gap-5 mt-5'>
              <input onChange={e => {setInput(parseInt(e.currentTarget.value))}} value={calInput} className='border-black col-span-4 border rounded px-2' placeholder='Add calories' type="number" />
              <button onClick={addCals} className='bg-blue-500 text-white px-2 duration-200 hover:bg-blue-700 rounded'>Add</button>
              <button onClick={resetCals} className='col-span-5 bg-black text-white hover:bg-red-500 rounded duration-200'>Reset</button>

            </section>
          </div>
        }

    </article>


  )      

}

export default Page;