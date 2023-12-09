"use client";
import React, { useEffect, useState } from 'react'

function User(props) {
    
    useEffect(() => {
        alert("Count is "+props.count)  
    },[props.count])
    return (
        <div>
            <h1>Count Props : <br /> {props.count}</h1>
            <h1>Data Props : <br /> {props.data}</h1>
           

        </div>
    )
}

export default User
