import React, { useState } from 'react'
import items from './Data2';
const Profile = () => {
    const[index,setIndex] = useState(0);
   const checkNumber = (number)=>{
     if(number>items.length-1){
        return 0;
     }
     else if(number<0){
        return items.length-1;
     }
     return number;
   }
   const prevClick = ()=>{
     
     setIndex((index)=>{
        let newIndex=index-1;
        return checkNumber(newIndex);
     });
      
   }
   const nextClick = ()=>{
     
    setIndex((index)=>{
        let newIndex=index+1;
        return checkNumber(newIndex);
     });
  }

  return (
    <div>
        <h1 className='text-3xl font-serif font-bold text-cyan-400 tracking-tight mb-2'>Profile Card</h1>
        <div className='max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md'>
            <div className=''>
                <img src={items[index].img} className='w-72 h-72 m-auto'></img>
            </div>
            <div className='flex'>
                <h1 className='text-2xl font-bold text-pink-500 tracking-tight mb-2 mt-10 ml-2'>{items[index].name}</h1>
                <div className='flex ml-auto'>
                    <button><img src="https://cdn-icons-png.flaticon.com/128/189/189254.png" onClick={prevClick} className='w-5 h-5'></img></button>
                    <button><img src="https://cdn-icons-png.flaticon.com/128/189/189253.png" onClick={nextClick} className='w-5 h-5 ml-2'/></button>
                </div>

            </div>
            <div>
                <h4 className='text-lg font-bold  tracking-tight mb-2 mt-2 ml-2'>JOB Profile :{items[index].job}</h4>
            </div>
            <div>
                <h4 className='text-lg font-bold  tracking-tight mb-2 mt-2 ml-2'> Age : {items[index].age}</h4>
            </div>
        </div>
      
    </div>
  )
}

export default Profile

