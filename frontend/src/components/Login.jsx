import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


// const navigate = useNavigate();



const Login = () => {
    const navigate = useNavigate();

    const form = useForm({
        defaultValues:{
            email:'',
            password:''
        }
    })

    const submitData =async(values)=>{
    
        try {
            const response = await axios.post('http://localhost:4000/api/v1/login',values);
            if(response.status ==200){
                toast.success('user logged in successfully');
                navigate('/index');
                
            }
            
        } catch (error) {
            console.log('error occured',error);
            toast.error('sorry you are unable to login')            
        }
        
    }

    


  return (
    <div className='min-h-96 w-3/12 bg-white mx-auto my-20 text-center p-3 rounded-md shadow-2xl shadow-slate-500'>
        <h1 className='text-xl underline underline-offset-3'>Login Page</h1>
        <form onSubmit={form.handleSubmit(submitData)}>
            <label htmlFor='email' className='block mt-4'>Email: </label>
            <input id='email' placeholder='email'  className='w-full rounded-lg border border-green-200  mt-2 p-2' {...form.register('email')}/>
            <label htmlFor='password' className='block mt-4'>Password: </label>
            <input id='password' placeholder='password' className='w-full rounded-lg border border-green-200 mt-2 p-2' {...form.register('password')}/>
            <hr className='m-4'></hr>
            <button className='bg-green-300 text-2xl p-2 rounded-lg font-bold mb-5'>Login</button>
            <p>Are you a new user<a className='hover:text-cyan-400 hover:cursor-pointer' href={'/register'}> Click here to Register</a></p>
        </form>

    </div>
  )
}

export default Login