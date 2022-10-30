import React from 'react'


function TweetField(props) 
{
  return (
    <div className = 'tweet-container' style = {{backgroundColor:'red'}}>  
            <div className="image-container">
                 <span> {props.image} </span> 
            </div>
            <div className = "text-container">
                <textarea onChange={e => props.onChange(e)}  value = {props.val} placeholder = 'Whats happening ?' className='textarea' />
            </div>
            <div className="icons-div">
                
                <button onClick={props.onClick}> Tweet </button>
            </div>
    </div>
  )
}
export default  TweetField