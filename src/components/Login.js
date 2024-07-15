import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg" alt="bg-img"/>
      </div>
      
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-xl opacity-90'>
      <h1 className=' font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm  && (<input type="text" placeholder="Name" className='p-4 my-4 w-full bg-gray-700'/>)}
        <input type="text" placeholder="email Address" className='p-4 my-4 w-full bg-gray-700'/>
        <input type="text" placeholder="password" className='p-4 my-4 w-full bg-gray-700'/>
        <button  className='p-4 my-6 w-full bg-red-600 rounded-xl'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className='py-4 cursor-pointer' onClick={toggleSignForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
      </form>
      
    </div>


  )
}

export default Login;