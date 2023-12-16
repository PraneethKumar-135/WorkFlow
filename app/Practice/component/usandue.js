import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


let names = ["praneeth","akshitha","sarita","Narayana","Sarojini"];

const usandue = () => {

    const[name,setName] = useState("");
    useEffect(
        () =>
        {
            console.log({name} + "garu");
        }
    )
    const changeName = () =>
    {
        setName()
    }
  return (
    <div>
        <center>
            <h1>Name : {name}</h1>
            <button onClick={changeName}>Change Name</button>
        </center>
    </div>
  )
}

export default usandue