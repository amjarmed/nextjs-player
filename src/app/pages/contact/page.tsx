'use client'
import { useMemo, useRef, useState } from 'react';

const calculateIncome=()=>{
  let number =10;
  for (let i = 0; i < 10000; i++) {
     number = number +i; 
  }
  console.log("Calculating...")
  return number;
} 

 function Contact() {
  const inputRef=useRef(null);
  const [name, setName]= useState("");
  const [shouldCalculate,setShouldCalculate]=useState(false)

  const income= useMemo(()=>calculateIncome(),[shouldCalculate])
   const handelSubmit=()=>{
       inputRef.current.preventDefault;
        inputRef.current.focus()
   }
    const handleInputChange=(e)=>{
        setName(e.target.value)
          setShouldCalculate(true)
        if (e.target.value.length === 10) {
          setShouldCalculate(true)
        }

   }
  return (
  <>
    <div className="text-center text-neutral-900 bg-slate-50 p-5  flex flex-col justify-center ">
        <h1 className='text-4xl font-extrabold my-5 text-blue-100 font-serif'>Contact Us </h1>
        <form className='w-1/2 mx-auto border border-blue-300 shadow-md rounded bg-neutral-300 text-start flex flex-col justify-center items-stretch p-2 font-serif font-semibold bg-opacity-70'>
           <label htmlFor="name" className='p-1 mb-1'>Full name</label>
          <input type="text" name="name" id="name" ref={inputRef} onChange={handleInputChange}/>
           <label htmlFor="name" className='p-1 my-1'>Email</label>
          <input type="text" name="email" id="email" />
           <label htmlFor="name" className='p-1 my-1'>Message</label>    
          <textarea name="message" id="message"></textarea>
          <button type="button" className='p-1 my-2 block w-1/2 mx-auto rounded-lg shadow-md bg-blue-500 text-neutral-50' onClick={handelSubmit}>Submit</button>
        </form>

        <p className='p-1 my-2 w-1/2 mx-auto rounded  text-start text-neutral-500'>final message: {name} - {income}</p>
        <div></div>
    </div>
  </>
  );
}
 
export default Contact;