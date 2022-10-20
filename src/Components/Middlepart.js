import React from 'react'
import {BiArrowBack} from 'react-icons/bi';


 function Middlepart() {
  return (      
    <div id = "middlepart-data" style = {{borderRight:'inset'}} >

            <div className="top-bar" style = {{fontSize:'26px',color:'white',height:'6vh',backgroundColor:'black'}}>
                    <span> <BiArrowBack /> </span>
                    <span> Thread </span>
            </div>

            <div className = "input-bar-data">
                 <span> <img src = "/delete.jpg"  style = {{width:'8%'}} /> </span>
                    <input type = "text" />
            </div>

    </div>
  )
}
export default Middlepart