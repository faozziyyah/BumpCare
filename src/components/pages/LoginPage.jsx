import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='mt-4'>
        <h1 className='text-4xl text-center '>Login</h1>
         <form action="" className='max-w-md mx-auto'>
            <input type="email" placeholder="your@email.com" />
            <input type="password" placeholder='password'/>
            <button className='text-white login'>Login</button>
            <p className='pt-2'>Don't have an account? <Link to={'/register'} href="" className='text-textColor'>Register</Link></p>
         </form>
    </div>
  )
}