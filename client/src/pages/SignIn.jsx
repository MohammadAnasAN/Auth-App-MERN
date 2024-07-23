import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js';
import {useDispatch, useSelector} from 'react-redux'
import OAuth from '../components/Oauth.jsx';

export default function Signin() {
  
  const[formData,setFormData]=useState({})
  // const[error,setError]=useState(null);
  // const[loading,setLoading]=useState(false);
  const{loading,error}=useSelector((state)=>state.user)
  console.log(loading,error);

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleChange=(e)=>{
     setFormData({...formData,[e.target.id]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()//prevent the refreshing when sumbiting the form

    try {
      dispatch(signInStart())
       // const res=await fetch('http://localhost:3000/api/auth/signup',formData);
      const res=await fetch('/api/auth/signin',{
       method:'POST',
       headers:{
        'Content-Type':'application/json',
        },
       body:JSON.stringify(formData)
      });
      const data=await res.json();

      dispatch(signInSuccess(data))

      if(data.success===false){
        dispatch(signInFailure(data))
        return
      }
      navigate('/')

    } catch (error) {
      dispatch(signInFailure(error));
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input type='text' placeholder='Email' id='email' 
        className='bg-slate-100 p-3 rounded-lg'
        onChange={handleChange} />

        <input type='password' placeholder='Password' id='password' 
        className='bg-slate-100 p-3 rounded-lg' 
        onChange={handleChange}/>

        <button disabled={loading} className='bg-indigo-600 text-white p-3
         rounded-lg uppercase hover:opacity-90'>
          {loading?'Loading...':'SignUp'}
        </button>
        <OAuth/>

      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to='/signup'>
        <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error ? error.message ||'Something went wrong':''}</p>
    </div>
 
  )
}

