"use client"

import { useEffect, useState } from 'react';

// client components


 function Todo() {
    const [todos, setTodo]= useState([]);

    useEffect( async ()=>{

     const response= await  fetch('https://jsonplaceholder.typicode.com/todos');

      const result=await response.json(); 

      setTodo(result);
      
    },[])


      return <>
      <h2>my todos: </h2>
       <ul className='list-disc'>
        {todos.map(({id, title})=>{

return <li key={id} className='p-1 '> {title} </li>
        })}
        
      </ul>
      </>
 }

 export default Todo;