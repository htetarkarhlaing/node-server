import { LockClosedIcon, MailIcon, UserIcon } from '@heroicons/react/solid'
import { EyeIcon,EyeOffIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

const Register = () => {
    const [passwordType,setPasswordType] = useState("password");
    const [cfmpasswordType,setcfmPasswordType] = useState("password");

    const [passwordInput,setPasswordInput] = useState("");
    const [cfmpasswordInput,setcfmPasswordInput] = useState("");

    const handlePasswordChange = (evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const handlecfmPasswordChange = (evnt)=>{
        setcfmPasswordInput(evnt.target.value);
    }

    const togglePassword = () =>{

        if(passwordType==="password")
          {
           setPasswordType("text")
          }else{
            setPasswordType("password")
          }
    }

    const cfmtogglePassword = () =>{

        if(cfmpasswordType==="password")
          {
           setcfmPasswordType("text")
          }else{
            setcfmPasswordType("password")
          }
    }

    

  return (
    <div className="h-screen w-full bg-slate-500 flex items-center justify-center">
        <div className="h-auto w-96 bg-blue-100 flex flex-col items-center p-10 rounded-lg">
            <h1 className='font-semibold text-blue-900 text-xl mb-4'>Sign Up</h1>

            <div className='my-3 relative'>
                <UserIcon className='w-5 h-4 text-gray-500 absolute top-3 left-2'/>
                <input type="text" placeholder="username" className='w-full border border-gray-400 p-2 px-7 outline-blue-300'/>
            </div>
            <div className='mb-3 relative'>
                <MailIcon className='w-5 h-4 text-gray-500 absolute top-3 left-2'/>
                <input type="email" placeholder="Email" className='w-full border border-gray-400 p-2 px-7 outline-blue-300'/>
            </div>
            <div className='w-full mb-3 ml-11'>
                <select className='p-1.5 px-3 border border-gray-400' style={{width:"263px"}}> 
                    <option></option>
                    <option value="1">Admin</option>
                    <option value="1">User</option>
                    <option value="1">Student</option>
                </select>
            </div>
            <div className='mb-3 relative'>
                <LockClosedIcon className='w-5 h-4 text-gray-500 absolute top-3 left-2'/>
                <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} placeholder="PasswordType" className='w-full border border-gray-400 p-2 px-7 outline-blue-300'/>

                <button onClick={togglePassword}>
                    { passwordType==="password" ? <EyeOffIcon className='w-5 h-4 text-gray-500 absolute top-3 right-4'/> : <EyeIcon className='w-5 h-4 text-gray-500 absolute top-3 right-4' onClick={togglePassword}/> }
                </button>
                {/* <EyeIcon className='w-5 h-4 text-gray-500 absolute top-3 right-4' onClick={togglePassword}/> */}
                {/* <EyeOffIcon className='w-5 h-4 text-gray-500 absolute top-3 right-4'/> */}
            </div>
            <div className='mb-3 relative'>
                <LockClosedIcon className='w-5 h-4 text-gray-500 absolute top-3 left-2'/>
                <input type={cfmpasswordType} onChange={handlecfmPasswordChange} value={cfmpasswordInput} placeholder="Confirm Password" className='w-full border border-gray-400 p-2 px-7 outline-blue-300'/>
                <button onClick={cfmtogglePassword}>
                    { cfmpasswordType==="password" ? <EyeOffIcon className='w-5 h-4 text-gray-500 absolute top-3 right-4'/> : <EyeIcon className='w-5 h-4 text-gray-500 absolute top-3 right-4' onClick={cfmtogglePassword}/> }
                </button>
                {/* <EyeIcon className='w-5 h-4 text-gray-500 absolute top-3 right-4'/> */}
                {/* <EyeOffIcon className='w-5 h-4 text-gray-500 absolute top-3 right-4'/> */}
            </div>

            <div className='text-center mt-5'>
                <p className='text-sm text-gray-500'>Already have an account?</p>
                <div>
                    <a href="#" className="text-blue-500 text-sm">Sign In from here</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register