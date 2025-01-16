import React, { useEffect, useState } from 'react'
const Dashboard = () => {

    const [users, setusers] = useState([])
    const gitPath = "https://raw.githubusercontent.com/anuplohar001/internshalaserver/refs/heads/main/"
    const [viewImages, setViewImages] = useState({flag: false, username:"", handle:""})
    const getUsers = async () => {
        try {
            const response = await fetch("https://backend-topaz-eight-48.vercel.app/getusers", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json()
            console.log(data.users)
            setusers(data.users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className=''>
            <div className='text-center text-3xl font-bold'>Admin Dashboard</div>

            <div className='m-8'>
                {
                    users.map((item, index) => (
                        <div key={index} className='mt-5'>
                            <div className=''>
                                <div className='text-center text-2xl'>Username : {item.username}</div>
                                <div className='text-center'>Social Media handles and their images</div>
                                
                                <div className='flex overflow-x-scroll my-2 justify-center'>
                                    {
                                        item.socialhandles.map((social, scIndex) => (
                                            <div key={scIndex} className='mx-3'>
                                                <div className='text-center'>{social.name}</div>
                                                <div>
                                                    {
                                                        (viewImages.flag && viewImages.username === item.username && viewImages.handle === social.name)  ? (<div className='flex mb-3'>
                                                            {
                                                                item.images.map((img, imgIndex) => (
                                                                    <div key={imgIndex} className=''>
                                                                        {
                                                                            social.name === img.socialhandle && (<img key={imgIndex} src={gitPath.concat(img.path)} alt='userpost' className=' rounded-lg h-44 w-64 m-2' />)
                                                                        }
                                                                    </div>
                                                                ))
                                                            }
                                                            <div onClick={() => setViewImages({ flag: false, handle: "", username: "" })} className='text-center text-red-800 cursor-pointer'>Close</div>
                                                        </div>) : (<div className='text-blue-600 cursor-pointer' onClick={()=> setViewImages({flag:true, handle:social.name, username:item.username})}>Click to View Images</div>)
                                                    }
                                                </div>
                                                
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard
