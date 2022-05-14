import React,{ useState } from 'react'
import './MessageSender.css'
import {Avatar} from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from './firebase';
import { serverTimestamp } from '@firebase/firestore'



function MessageSender() {
  const [{user}, dispatch] = useStateValue()
  const [input, setInput] = useState('');
  const [imgUrl, setImgUrl] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    db.collection('posts').add({
      message : input,
      timestamp : serverTimestamp(),
      profilePic: user.photoURL,
      username:user.displayName,
      image:imgUrl
    })
    
    
    /* if(input !== "" || imgUrl !==""){
      setInput("")
      setImgUrl("")
    } */
    setInput("");
    setImgUrl("")
    
  }
  const handleInput=(event) => {
    
    setInput(event.target.value)
    
  }
  const handleInputUrl = (event) => {
    setImgUrl(event.target.value);
  }
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL}/>
        <form>
        <input 
              onChange={handleInput}
              type="text"
              value={input}
              className='messageSender__input' 
              placeholder={`What's on your mind, ${user.displayName}?`}
              
       
        />

        <input placeholder={`image URL (Optional)`} 
        type="text"
          value={imgUrl}
          onChange={handleInputUrl}
        
        />

        <button onClick={handleSubmit} type='submit'>Hidden submit</button>
        </form>
      </div>

      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{color:'red'}}/>
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{color:'green'}}/>
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{color:'orange'}}/>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender;