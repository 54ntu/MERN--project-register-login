import React from 'react'


const Register = () => {
  return (
    <div className=' text-center min-h-96 w-3/12 bg-slate-100 mx-auto my-20 rounded-lg shadow-2xl shadow-gray-500 '>
        <h1 className='p-3 font-bold underline underline-offset-4'>Registration Page</h1>
        <form className='p-4'>
            <label className='text-xl block ' for="firstname">First name</label>
            <input type="text" className='w-full rounded-lg  border border-green-300 p-1 mb-1' id="firstname" name="firstname" required/>
            <label className='text-xl block ' for="lastname">Last name</label>
            <input type="text" className='w-full rounded-lg border border-green-300 p-1 mb-1' id="lastname" name="lastname" required/>
            <label className='text-xl block' for="email">Email:</label>
            <input type="email"  className='w-full rounded-lg border border-green-300 p-1 mb-1'id="email"  name="email" required/>
             <label className='text-xl block' for="password">Password</label>
            <input type="password" className='w-full rounded-lg  border border-green-300 p-1 mb-3' name="password" />
            <hr className='p-4'></hr>
            <button className='bg-green-900 p-2 rounded-md text-white'>Submit data</button>

        </form>
    </div>
  )
}

export default Register