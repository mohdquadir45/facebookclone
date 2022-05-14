import React from 'react'
import Story from './Story'
import './StoryReel.css'
function StoryReel() {
  return (
    <div className='storyReel'>
        <Story
          image="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQEkkXKQIc22Pg/profile-displayphoto-shrink_400_400/0/1617426909992?e=1655337600&v=beta&t=VROwKDuEl7PBUuu7KYltQmyOHaJhRLU7c5to9-mAUHs"
          title="Omer"
          
          />
          <Story
            image='https://images.unsplash.com/photo-1647801999131-14ec812fab79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQHfE8hORI4rzg/profile-displayphoto-shrink_400_400/0/1639925201063?e=1655337600&v=beta&t=HW-ZWahY_udLg3XTqiyAVAYHlSvhk7avO6GzVijVd_I"
            title='Sabih'
            />
            <Story
              image="https://images.unsplash.com/photo-1523371683773-affcb4a2e39e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQHTAUiI3IET6w/profile-displayphoto-shrink_400_400/0/1636024615763?e=1655337600&v=beta&t=bDnT0NmzN1Gw3hJkaX-FKbIaU7SDUbep_TG_QPCCTfk"
              title="Aatif Aslam"
              
              
              />
              <Story
                image="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                profileSrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
                title="Imran Khan"
              
              
              />
              {/* <Story
                image=""
                profileSrc=""
                title=""
              
               />
               <Story
                image=""
                profileSrc=""
                title=""
              
               /> */}
    </div>
  )
}

export default StoryReel