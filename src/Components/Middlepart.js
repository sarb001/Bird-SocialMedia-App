import React, { useState } from 'react'
import {BiArrowBack} from 'react-icons/bi';
import Datapost from './Datapost';

 function Middlepart() 
 {

  const [todo,setodo] = useState([]);   

  const [task,setask] = useState(""); 

    function handleclick()
    {
        setodo(oldata => {
            return [...oldata,task];
        })
        setask('');
    }


  return (      
    <div id = "middlepart-data" style = {{borderRight:'inset'}} >
            <div className="top-bar" style = {{fontSize:'26px',color:'white',height:'6vh',backgroundColor:'black'}}>
                    <span> <BiArrowBack /> </span>
                    <span> Thread </span>
            </div>

            <div className = "input-bar-data" style = {{display:'grid',gridTemplateColumns:'80px 1fr'}}>
                    <div style = {{paddingTop:'4%'}}> <img src = "/modalimg.jpg"  style = {{width:'60%',borderRadius:'50px',height:'6vh'}}/> </div>
                    
                    <div>
                        <input type = "text" id = "input-data" placeholder = "Write your First Words.." value = {task}  onChange={(e) => setask(e.target.value)} 
                         style = {{padding:'4% 5%'}}
                        />
                    </div>
                  
            </div>
            <button onClick = {handleclick}> Tweet11 </button>


              <div className='post-data'>
                       <span> @amanbhai </span>    
                       {/* <ul>
                            { todo.map((item) =>
                              {
                                return <li> {item} </li>
                              })}
                        </ul> */}

              </div>              

 

            


    </div>
  )
}
export default Middlepart