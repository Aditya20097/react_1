
import { useState } from "react";

function App() {
  const[count ,setCount] =useState([{id:2,name:"adigya" ,age:20},{id:3,name:"aditya" ,age:21}])
  const counter = ()=> {
    setCount(prev => [...prev,{
      id:5,
      name:"adityaa",
      age:25
    }])
  }
   const delCounter = (id)=> {
    setCount( prev => prev.filter(task => id !== task.id ))
  }
  return (
    <div>
    <h1> classic react app </h1>
     
    <ul>
      {
        count.map((task )=>(
        
          <li key={task.id}>
           
            <span>{task.id}</span>
             <span>{task.name}</span>
              <button onClick={counter}>add</button>
             
             <button onClick={()=> delCounter(task.id)}>delete</button>
          </li>
          
        ))
      }
    </ul>
   </div>

  );
}

export default App;
