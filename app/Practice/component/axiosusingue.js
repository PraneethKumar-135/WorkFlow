"use client"
import * as axios from 'axios';
import React, { useEffect, useState } from 'react'

const axiosusingue = () => {
    const[post,setPost] = useState([])
    useEffect(
        () =>
        {
            axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/posts',
                responseType: 'stream'
            })
            .then(res =>
                {
                    console.log(res);
                    setPost(res.data)
                })
                .catch(err =>
                    {
                        console.log(err);
                    })
        },[]
    )
  return (
    <div>
        <center>
            <ul>
                {
                    post.map(posts =>{<li key={posts.id}>{posts.title}</li>})
                }
            </ul>
        </center>
    </div>
  )
}

export default axiosusingue