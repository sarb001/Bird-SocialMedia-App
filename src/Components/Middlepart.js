import React, { useState } from 'react'
import {BiArrowBack} from 'react-icons/bi';
import Datapost from './Datapost';


 function Middlepart() 
 {

    const [Task,setTask]= useState("");
    const [oldtodo,setoldtodo] = useState([])       


   function handlechange(e)
   {
     const first = e.target.value;
     setTask(first);
   }

   function getTweet(item)
   {
        return  [...item,oldtodo];
   }


  return (      
    <div id = "middlepart-data" style = {{borderRight:'inset'}} >

            <div className="top-bar" style = {{fontSize:'26px',color:'white',height:'6vh',backgroundColor:'black'}}>
                    <span> <BiArrowBack /> </span>
                    <span> Thread </span>
            </div>

            <div className = "input-bar-data">
                  <span> <img src = "/delete.jpg"  style = {{width:'8%'}} /> </span>
                    <input type = "text" id = "input-data"  value = {Task} onChange = {handlechange} />

                        <ul>
                            <li> First </li>
                            <li> First 11 2 </li>
                        </ul>

                        <button  onClick={getTweet}> Tweet11 </button>
                  
            </div>



    </div>
  )
}
export default Middlepart