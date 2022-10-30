import React from 'react';
import {GoComment} from 'react-icons/go';
import {FcLike,FcShare} from 'react-icons/fc';
import {BiRepost} from 'react-icons/bi';


function NewTweets({username,tweet}) {
  return (
    <div className='tweets-card'>
          <div className="tweet-card-container-name">
                {username}
          </div>
          <div className="tweet-part">
              <p> {tweet} </p>
          </div>
          <div className="icons" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
                    <p> <GoComment/> </p>
                    <p> <BiRepost/> </p>
                    <p> <FcLike/>   </p>
                    <p> <FcShare/>  </p>
          </div>
    </div>
  )
}
export default  NewTweets
