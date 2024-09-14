
'use client';

import { useEffect, useState } from 'react';

 
 function Counter() {
    const [counter, setCounter]=useState(0);

    const handelClick=()=>{
        setCounter(counter + 1)
    }
    useEffect(()=>{
  console.log("counter has been triggered")
    },[counter])

  return (

    <div>
        <h3>cunter: {counter}</h3>
<button onClick={handelClick} className='p-2 border shadow bg-slate-200 rounded-full '> click to add </button>
    </div>
  );
}
 
export default Counter