import React, { useState } from 'react';
import {BiArrowBack,BiRepost} from 'react-icons/bi';
import './Middlepart.css';
import TweetField from './TweetField';
import NewTweets from './NewTweets';
import North from '../Components/North.jpg'

 function Middlepart() 
 {
  const [tweetlist,setweetlist] = useState([]);   
  const [taskval,setaskval] = useState(""); 

    const handlechange = (e) =>
    {
        setaskval(e.target.value);
        console.log(taskval);
    }

     function handleclick(e)      
    {  
       setaskval('');
        let arrs = {
           username : 'king is here',
           tweet : taskval,
           image: '/image22.jpg'
        };
        setweetlist([arrs,...tweetlist])
        console.log(taskval);
    };

  return (      
    <>
    <div id = "middlepart-data" style = {{borderRight:'inset'}} >
         <TweetField 
          onChange = {handlechange}
          val = {taskval}
          onClick= {handleclick}
          image = {North}
           />
           {
             tweetlist.map((item) => (
                <NewTweets
                 username = {item.name}
                 tweet = {item.tweet}
                 image = {item.image}
                 />                ))
           }
    </div>
    </>
  )
}
export default Middlepart
