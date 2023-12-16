'use client'
import React , { useEffect, useState} from 'react'

const us = () => {

    const[count,setCount] = useState(0)
    useEffect(
        () =>
        {
            console.log(count);
        },
        [count]
    )
  return (

    <div>
        <center>
            <h1>Count : {count}</h1> <br />
            
            <button onClick={() => {setCount(count+1)}}>Click</button>
        </center>
    </div>
    
  
    )
}

export default us