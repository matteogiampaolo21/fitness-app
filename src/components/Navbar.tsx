import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-neutral-50 py-3 px-5 shadow-lg'>
        <ul className='flex flex-row gap-5'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/intake'>Intake</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar