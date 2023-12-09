"use client";
import React, { useEffect, useState } from 'react'
import User from '../user/page';

function New() {
    const [data,setData] = useState(10)
    const [count,setCount] = useState(100)
    
    // useEffect(() => {
    //     console.warn("Called with data state");  
    // },[data])
    // useEffect(() => {
    //     // console.warn("Called with data state");  
    //     alert("The count is " + count)
    // },[count])
    return (
        <div>
            {/* <h1>Count: <br /> {count}</h1>
            <h1>Data: <br /> {data}</h1> */}

            <User count={count} data={data}/>

            <button onClick={()=>setCount(count+1)}>Update Counter</button>
            <button onClick={()=>setData(data+1)}>Update Counter</button>
            {/* <h1>Hello Next.js Counter App</h1>
            <hr />
            <button onClick={() =>{ 
                return setCount(count + 1)
                }}>
                Plus
            </button>
            <hr />
            <button onClick={()=>{
                if (count===0) {
                    return setCount(0)
                }
                else{
                    return setCount(count - 1)
                }
            }}>Minus</button>
            <br />
            <hr />
            <button onClick={()=>{
               return setCount(0)
            }}>Reset</button>
            <hr />
            <h3>Count: {count}</h3>
            <hr /> */}
            {/* <h1>{data}</h1>
      <button onClick={()=>setData("Ahmad")}>Update data</button> */}

        </div>
    )
}

export default New
