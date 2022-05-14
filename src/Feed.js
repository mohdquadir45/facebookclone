
import React, { useEffect, useState } from 'react'
import './Feed.css'
import db from './firebase'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data()})))
        ))
  }, [])
  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender/>

        {posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          
          
          />
        ))}
        
        
        
        
        
        {/* <Post 
         profilePic="https://media-exp1.licdn.com/dms/image/C5603AQHfE8hORI4rzg/profile-displayphoto-shrink_400_400/0/1639925201063?e=1655942400&v=beta&t=C6OLzr-OT0oGALhHqgMhEAHXRZ8cvS9yF4XIHnUuc9Q"
         message='WOW this works!'
         timestamp='Tis is a timestamp'
         username={'shaik shabihuddin'}
         image='https://images.unsplash.com/photo-1633427370898-c40eceefb26c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
         
        
        /> */}
        {/* <Post 
         profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQEkkXKQIc22Pg/profile-displayphoto-shrink_400_400/0/1617426909992?e=1656547200&v=beta&t=BobLzf2DMpUrXWkTjSF70bWUFaiT2QrlZ7pxZReIK_0"
         message='WOW this works!'
         timestamp='Tis is a timestamp'
         username={'Anuj Garg'}
         image='https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
         
        
        />
        <Post 
         profilePic="https://media-exp1.licdn.com/dms/image/C5603AQHTAUiI3IET6w/profile-displayphoto-shrink_400_400/0/1636024615763?e=1656547200&v=beta&t=eO1lpMxhn5CtxvWeplicy-aXu3X9SNa1dgqx_w0x80M"
         message='WOW this works!'
         timestamp='Tis is a timestamp'
         username={'Aatif Aslam'}
         image='https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
         
        
        />
        <Post 
         profilePic="https://media-exp1.licdn.com/dms/image/C5603AQHTAUiI3IET6w/profile-displayphoto-shrink_400_400/0/1636024615763?e=1656547200&v=beta&t=eO1lpMxhn5CtxvWeplicy-aXu3X9SNa1dgqx_w0x80M"
         message='WOW this works!'
         timestamp='Tis is a timestamp'
         username={'Aatif Aslam'}
         image='https://images.unsplash.com/photo-1648644351235-1b9df31fa9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
         
        
        /> */}
    </div>
  )
}

export default Feed