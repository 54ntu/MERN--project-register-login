import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'



const Register = () => {

    const form = useForm({
        defaultValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:''

        }
    })

    const submitData = async(values)=>{


        try {
             const response = await axios.post('http://localhost:4000/api/v1/register',values);
            console.log(response);
            if(response.status ==200){
                toast.success('new user added')
                form.reset();


            }
            else{
                toast.error('error on submitting data')
            }
            
        } catch (error) {
            console.error(error);
            toast.error('error submitting data')
            
        }
       
    }



  return (
    <div className=' text-center min-h-96 w-3/12 bg-slate-100 mx-auto my-20 rounded-lg shadow-2xl shadow-gray-500 '>
        <h1 className='p-3 font-bold underline underline-offset-4'>Registration Page</h1>
        <form className='p-4' onSubmit={form.handleSubmit(submitData)}>
            <label className='text-xl block ' htmlFor="firstname">First name</label>
            <input type="text" className='w-full rounded-lg  border border-green-300 p-1 mb-1' id="firstname" {...form.register('firstname')} required/>
            <label className='text-xl block ' htmlFor="lastname">Last name</label>
            <input type="text" className='w-full rounded-lg border border-green-300 p-1 mb-1' id="lastname"  {...form.register('lastname')} required/>
            <label className='text-xl block' htmlFor="email">Email:</label>
            <input type="email"  className='w-full rounded-lg border border-green-300 p-1 mb-1'id="email"  {...form.register('email')} required/>
             <label className='text-xl block' htmlFor="password">Password</label>
            <input type="password" className='w-full rounded-lg  border border-green-300 p-1 mb-3' {...form.register('password')} />
            <hr className='p-4'></hr>
            <button className='bg-green-900 p-2 rounded-md text-white'>Submit data</button>
            <p className='mt-2'> Already a user <a className='hover:bg-emerald-300' href={'/login'}>Click here to login</a></p>

        </form>
    </div>
  )
}

export default Register