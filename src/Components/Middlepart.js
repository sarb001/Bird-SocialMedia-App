import React, { useState } from 'react'
import {BiArrowBack,BiRepost} from 'react-icons/bi';
import Datapost from './Datapost';
import {FcLike,FcShare} from 'react-icons/fc';

import {GoComment} from 'react-icons/go';

import './Middlepart.css';

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

             <div style = {{borderBottom:'inset'}}>
                <div className = "input-bar-data" style = {{display:'grid',gridTemplateColumns:'80px 1fr',marginLeft:'5%',marginRight:'5%'}}>
                        <div style = {{paddingTop:'4%'}}> <img src = "/modalimg.jpg"  style = {{width:'60%',borderRadius:'50px',height:'6vh'}}/> </div>
                        <div style = {{textAlign:'left',alignSelf:'center'}}>

                            <input type = "text" id = "input-data" placeholder = "Write your First Words.." value = {task}  onChange={(e) => setask(e.target.value)} 
                                style = {{padding:'3% 8%'}}
                            />
                        </div>
                </div>


                <div style = {{textAlign:'center'}}>
                   <button id = "btn-tweet" onClick = {handleclick}> Tweet </button>
                 </div>
             </div>

              <div className='post-data' style = {{borderBottom:'inset'}}>
                    <div className = "input-bar-data" style = {{display:'grid',gridTemplateColumns:'80px 1fr',marginLeft:'5%',marginRight:'5%'}}>
                                <div style = {{paddingTop:'4%'}}> <img src = "/modalimg.jpg"  style = {{width:'60%',borderRadius:'50px',height:'6vh'}}/>   </div>
                                
                                 <div id = "twitter-name" style = {{display:'flex'}}>
                                        <div id = "username">  Sarbaingh001 </div>
                                        <div id = "new-username">  @sarb001 </div>
                                 </div>
                                <div style = {{textAlign:'left',alignSelf:'center'}}>
                                        { todo.map((item) =>{ 
                                           return <span> {item} </span>
                                        })}
                                </div>
                                <div id = "social-links" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
                                      <span>  <GoComment/></span>   
                                      <span>  < BiRepost/></span>  
                                      <span> < FcLike/></span>  
                                      <span>  <FcShare/> </span>     
                                </div>
                    </div>
              </div>              

 

            


    </div>
  )
}
export default Middlepart