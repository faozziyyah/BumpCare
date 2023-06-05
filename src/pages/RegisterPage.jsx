import React from 'react';
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div className='mt-4 '>
        <h1 className='text-4xl text-center my-5'>Register</h1>
         <form action="" className='max-w-md mx-auto'>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <input type="email" placeholder="your@email.com" />
            <input type="password" placeholder='password'/>
            <button className='text-white login'>Register</button>
            <p className='pt-2'>Already have an account? <Link to={'/login'} href="" className='text-primary'>Login in</Link>
            </p>
         </form>
    </div>
  )
}