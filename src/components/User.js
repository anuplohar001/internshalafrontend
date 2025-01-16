import React, { useState } from 'react'
import axios from 'axios'
const User = () => {

    const [pending, setPending] = useState(false)
    const [userDetails, setUserDetails] = useState({ username: "", socialhandle: "" })
    const [selectedImages, setselectedImages] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target; 
        setUserDetails((prevState) => ({
            ...prevState, 
            [name]: value, 
        }));        
    };

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        setselectedImages(files);
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault()
        setPending(true)
        const formData = new FormData()

        Object.keys(userDetails).forEach((key) => {
            formData.append(key, userDetails[key]);
        });

        for(let i = 0; i < selectedImages.length; i++) {
            formData.append("images", selectedImages[i]);
        }

        try {
            
            const response = await axios.post("https://backend-topaz-eight-48.vercel.app/userdetails", formData);
            
            if(response.status === 200)
            {
                alert("user created")
                setUserDetails({ username: "", socialhandle: ""})
                setselectedImages([])
                setPending(false)
            }
        } catch (error) {
            console.log(error)
            setPending(false)
        }
    }

    return (
        <div className=''>
            <div className='mt-6 font-bold text-3xl text-center'>
                User Submission Form
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center m-10'>
                <label htmlFor="Name" className='flex flex-col'>Name:
                    <input name='username' onChange={handleChange} value={userDetails.username} type="text" placeholder='Username' className='rounded-lg border-2 h-11 w-96 p-2' />
                </label>
                <label htmlFor="Social Handle" className='flex flex-col'>Social Handle:
                    <input name='socialhandle' onChange={handleChange} value={userDetails.socialhandle} type="text" placeholder='Social Handle' className='rounded-lg border-2 h-11 w-96 p-2' /></label>
                <label htmlFor="images" className='flex flex-col'>Upload Images :
                    <input name='images' onChange={handleFileChange} accept="image/*" type="file" multiple className='rounded-lg p-1 border-2 h-11 w-96' />
                </label>
                <button type='submit' className='border-2 p-2 w-20 rounded-lg bg-purple-900 text-white hover:bg-purple-600 duration-500'>
                    Submit
                </button>
            {
                pending && (<div className='text-xl font-bold text-center'>
                    Creating Social handle....
                </div>)
            }
            </form>
            
        </div>
    )
}

export default User
