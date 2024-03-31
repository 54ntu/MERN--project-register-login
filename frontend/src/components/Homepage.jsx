import React from 'react'

const Homepage = () => {
  return (
    <>
     <div className='h-96 w-3/4  mx-auto my-20 bg-white rounded-lg text-center p-5 shadow-2xl shadow-slate-700'>
        <h1 className='font-bold text-purple-300 text-xl'> WELCOME USER</h1>
        <p className='text-xl mt-2'>Please proceed with the better choice given</p>
        <hr className='m-2'></hr>
        <p>If you are new then click here for registration <a href={'/register'} className='hover:bg-green-200'>Register</a></p>
        <h2>OR</h2>
        <h3>If you are already a user then <a href={'/login'} className=' hover:text-lime-600'>Login</a></h3>
        
    </div>   
    </>
  )
}

export default Homepage