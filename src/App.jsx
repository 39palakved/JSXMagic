import { useState } from 'react'
import Data from './Components/Data'
import List from './Components/List'
import './App.css'

function App() {
  const [myList, setMyList] = useState(Data)
  return(
    <div>
      <h3 className='font-bold'>{myList.length} Students</h3>
    <List people={myList}/>
    <button onClick={()=>{setMyList([])}} className='px-4 py-2 bg-blue-500 text-white font-bold rounded-lg '>Clear All</button>
    </div>
  )

  
}

export default App
