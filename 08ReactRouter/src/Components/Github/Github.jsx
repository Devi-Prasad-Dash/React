import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    /*
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Devi-Prasad-Dash')
            .then(response => response.json())
            .then(data => setdata(data))
    }, [])
    */
    
    const data = useLoaderData()

    return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300}/>
      </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Devi-Prasad-Dash')
    return response.json()
}