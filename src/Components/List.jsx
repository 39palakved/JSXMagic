import React from 'react'

const List = ({people}) => {
  return (
    <>
      {
        people.map((person)=>{
            
           const{id,name,age,image} = person
           return(
            <>
            <div key={id} className='flex ml-96'>
                  <img src={image}  className=' w-20 h-20'></img>
                  <div className='ml-10'>
                    <h4 className='font-bold'>
                        name : {name}
                    </h4>
                    <p className=''>
                        age  : {age}
                    </p>
                  </div>
            </div>
            </>
           )
        })
      }
    </>
  )
}

export default List
