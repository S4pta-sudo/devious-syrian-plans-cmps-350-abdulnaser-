"use client"
import {React, useState} from  "react"

const [x,setx] = useState(10);
function incrementx(){
    setx(x+1);
    console.log(x);
}

function transactions(){
return (
    //now we take the css
    <>   
        <label htmlFor=""> x = {x}</label>
        <button onClick={incrementx()}>incrment</button>
        <h1>tranny</h1>
        
        </>
)

}

export default transactions