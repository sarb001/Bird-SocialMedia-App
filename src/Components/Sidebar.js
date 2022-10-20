import React from 'react';
import {BsTwitter , BsFillPeopleFill } from 'react-icons/bs';

import {AiFillHome , AiFillBell} from 'react-icons/ai';
import {FiMessageCircle} from 'react-icons/fi';
import {FaHashtag} from 'react-icons/fa'    ;
import {BsFillBookmarkFill ,BsPersonFill } from 'react-icons/bs';
import {CgMoreO} from 'react-icons/cg';
import  './Sidebar.css';

 function Sidebar() {
  return (
    <div id = "sidebar-data">
    
          <span id = "twitter-logo" > <BsTwitter /> </span>
           <div className="links">
             <ul>
                <li> <a href = "#">   <AiFillHome /> Home  </a>  </li>
                <li> <a href = "#">   <FaHashtag /> Explore </a>   </li>
                <li> <a href = "#">   <BsFillPeopleFill /> Communities   </a>  </li>
                <li> <a href = "#">  <AiFillBell /> Notifications  </a></li>
                <li> <a href = "#">     <FiMessageCircle /> Messages </a> </li>
                <li> <a href = "#">   <BsFillBookmarkFill /> Bookmarks  </a> </li>

                 <li> <a href = "#"> <BsPersonFill /> Profile   </a>   </li>
                <li> <a href = "#">  <CgMoreO /> More  </a>  </li>
                
             </ul>
             <div style = {{paddingLeft:'15%'}}>
                <button id = "tweet-btn"> Tweet </button>
             </div>
             
           </div>

           <div className="profile">
               <span> <img src = "" />  </span>
               <div> 
                  <span> Mehul Singh  </span>
                  <span> @Mehul Singh   </span>
               </div>
               <span>  <CgMoreO /> </span>
           </div>
    </div>
  )
}
export default Sidebar