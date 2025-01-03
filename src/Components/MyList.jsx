import React from 'react'
import { useState } from 'react'
const MyList = () => {
    const [allTodos, setAllTodos] = useState([])
    const [newTitle, setNewTitle] = useState("")
    const [newDesp, setNewDesp] = useState("")
    const [completedTodos, setCompletedTodos] = useState([])
const handleAdd=()=>{
    let todoItem= {
        title:newTitle,
        desp:newDesp,
    }
    let updatedArr = [...allTodos]
    updatedArr.push(todoItem)
    setAllTodos(updatedArr);
    setNewDesp("")
    setNewTitle("")
    localStorage.setItem('todolist' , JSON.stringify(updateArr));
}
const handledelete = index=>{
    let reducedArr = [...allTodos]
    reducedArr.splice(index);
   
    localStorage.setItem('todolist' , JSON.stringify(reducedArr));
    setAllTodos(reducedArr);
}
const handleComplete = index=>{
    let completeArr =[...completedTodos];
    completeArr.push({...allTodos[index]})
    setCompletedTodos(completeArr)
}

  return (
    <>
    <div>
       <h1 className="font-bold">TodoBoard</h1>
    </div>
 <div className='flex mt-6'>
    <div className='ml-80'>
        <input className='px-4 py-2 border border-gray-300 rounded-lg' type='text' value={newTitle} placeholder="What's your task title?" onChange={(e)=>setNewTitle(e.target.value)} />
  </div>
        <div className='ml-4'>
         <input className='px-4 py-2 border border-gray-300 rounded-lg   ' type='text' value={newDesp} placeholder="write description" onChange={(e)=>setNewDesp(e.target.value)}/>
         </div>
         <button className='px-6 py-2 bg-green-800 text-white font-semibold rounded-lg ml-10' onClick={handleAdd}>Add</button>
 </div>
<div className='mt-6'>
    <button className='px-4 py-2 bg-white rounded mr-2'>Todo</button>
    <button className='px-4 py-2 bg-red-300 text-white rounded'>Completed</button>
</div>
<div className='ml-20 mr-20 mt-10'>
   {
    allTodos.map((item,index)=>{
        return(
            <>
            <div className='px-4 py-2 border border-black rounded-lg w-auto mt-4'>
            <div className='flex mt-4' key={index}>
            <div className='px-4 py-2 border border-gray-300 rounded-lg w-auto'>
                   {item.title}  
            </div>
            <div className='px-4 py-2 border border-gray-300 rounded-lg w-auto ml-4'>
             {item.desp}
            </div>
            
            <button className='  rounded-lg ml-2' onClick={()=>handledelete(index)}><img className='w-7 h-7' src='https://img.icons8.com/?size=100&id=67884&format=png&color=000000'></img></button>
            <button className=' font-semibold rounded-lg ml-2' ><img className='w-7 h-7' src='https://img.icons8.com/?size=100&id=QytljKGT5QAQ&format=png&color=000000'></img></button>
            <button className='font-semibold rounded-lg ml-2' ><img className='w-7 h-7' onClick={()=>handleComplete(index)} src='https://img.icons8.com/?size=100&id=81438&format=png&color=000000'></img></button>
            </div>
            </div>
            </>
            
        )
        

    })

   }
   
</div>
<div className='m-auto'>
         <button className='px-4 py-2 bg-red-300 text-white font-semibold rounded-lg mt-10' onClick={()=>{setAllTodos([])}}>Clear All</button>   
    </div>
 </> 

  )
}

export default MyList
