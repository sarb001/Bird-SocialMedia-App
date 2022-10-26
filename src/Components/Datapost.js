import React, { useState } from 'react'
import {GoComment} from 'react-icons/go';
import {FcLike,FcShare} from 'react-icons/fc';

import {BiRepost} from 'react-icons/bi';

 function Datapost({username,newusername,image,todo}) 
 {
        

  return (
        <div> 
                 
                                <div className = 'post-data' style = {{borderBottom:'inset'}} >
                                   <div className = "input-bar" style = {{display:'grid',gridTemplateColumns:'80px 1fr',marginLeft:'5%',marginRight:'5%'}}>
                                             <div style = {{paddingTop:'4%'}}> 
                                                 <img src = {image}  style = {{width:'60%',borderRadius:'50px',height:'6vh'}}/>  
                                              </div>
                                            
                                             <div> 
                                                    <div id = "twitter-name" style = {{display:'flex'}}>
                                                            <div id = "username">      {username} </div>
                                                            <div id = "new-username">  {newusername} </div>
                                                    </div>
            
            
                                                    <div style = {{fontSize:'20px',fontWeight:'700'}}>
                                                            {todo}
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
                

                 {/* <div className = 'post-data' style = {{borderBottom:'inset'}} >
                    <div className = "input-bar" style = {{display:'grid',gridTemplateColumns:'80px 1fr',marginLeft:'5%',marginRight:'5%'}}>
                                 <div style = {{paddingTop:'4%'}}> 
                                     <img src = {image}  style = {{width:'60%',borderRadius:'50px',height:'6vh'}}/>  
                                  </div>
                                
                                 <div> 
                                        <div id = "twitter-name" style = {{display:'flex'}}>
                                                <div id = "username">      {username} </div>
                                                <div id = "new-username">  {newusername} </div>
                                        </div>


                                        <div style = {{fontSize:'20px',fontWeight:'700'}}>
                                                {todo}
                                        </div>
                                        <div id = "social-links" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
                                            <span>  <GoComment/></span>   
                                            <span>  < BiRepost/></span>  
                                            <span> < FcLike/></span>  
                                            <span>  <FcShare/> </span>     
                                        </div>
                                 </div>
                     </div>
                 </div>   */}
        

        {/* <div className='post-data' style = {{borderBottom:'inset'}}>
                    <div className = "input-bar" style = {{display:'grid',gridTemplateColumns:'80px 1fr',marginLeft:'5%',marginRight:'5%'}}>
                                <div style = {{paddingTop:'4%'}}> <img src = {image}  style = {{width:'60%',borderRadius:'50px',height:'6vh'}}/>  
                               
                                </div>
                                
                                 <div> 
                                        <div id = "twitter-name" style = {{display:'flex'}}>
                                                <div id = "username">      {username} </div>
                                                <div id = "new-username">  {newusername} </div>
                                        </div>


                                        <div style = {{fontSize:'20px',fontWeight:'700'}}>
                                                {todo}
                                        </div>
                                        <div id = "social-links" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
                                            <span>  <GoComment/></span>   
                                            <span>  < BiRepost/></span>  
                                            <span> < FcLike/></span>  
                                            <span>  <FcShare/> </span>     
                                        </div>
                                 </div>
                        
                    </div>
              </div>  */}
    </div>
  )
}
export default Datapost