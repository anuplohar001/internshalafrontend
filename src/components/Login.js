import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({ username: "", password: "" })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(userDetails.username === 'demoadmin@123' && userDetails.password === 'demo@234')
        {
            navigate("/admin")
        }
        else
        {
            alert("Invalid Credentials")
            setUserDetails({username:"", password:""})
        }
    }

    return (
        <div>
            <div className='mt-6 font-bold text-3xl text-center'>
                Admin Login
            </div>
            <div className='text-center'>Username: demoadmin@123 Password: demo@234</div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center m-10'>
                <label htmlFor="Name" className='flex flex-col'>Username:
                    <input name='username' onChange={handleChange} value={userDetails.username} type="text" placeholder='Username' className='rounded-lg border-2 h-11 w-96 p-2' />
                </label>
                <label htmlFor="Social Handle" className='flex flex-col'>Password
                    <input name='password' onChange={handleChange} value={userDetails.password} type="text" placeholder='Password' className='rounded-lg border-2 h-11 w-96 p-2' /></label>

                <button type='submit' className='border-2 p-2 w-60 rounded-lg bg-purple-900 text-white hover:bg-purple-600 duration-500'>
                    Continue to Dashboard
                </button>
            </form>
        </div>
    )
}

export default Login
