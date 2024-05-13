import Link from 'next/link'
import React from 'react'
import {doc, getDoc, Timestamp} from 'firebase/firestore'
import {db} from '../../../../firebase/firebaseConfig'


// export let records:Records = {
//   backSquats:[
//     {weight:80,date:new Date('October 23, 2021')},
//     {weight:83,date:new Date('November 04, 2021')},
//     {weight:97,date:new Date('November 05,2021')},
//   ],
//   pullUps:[
//     {weight:15,date:new Date('January 15, 2022')},
//     {weight:24,date:new Date('April 18, 2022')}
//   ]
// }

export type Records = {
  [key:string]:{
   weight:number,
   date:Timestamp, 
  }[]
}

async function page() {


  async function getData(){
    const docRef = doc(db, "records", "ZJgsvvE5ArG3KWH1JxUX");
    const docSnap = await getDoc(docRef);

  
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  
  const records = await getData();


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