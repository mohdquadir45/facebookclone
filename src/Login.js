import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {

        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user
            })
            
        }).catch(error => alert(error.message))

    }
  return (
    <div className='login'>
        <div className='login__logo'>
            <img 
             src='https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png'
                alt=''
            
            />
            <img
                src='https://media1.fdncms.com/inlander/imager/u/original/2772541/facebook-wordmark-1024x819.png'
                alt=''
            />
        </div>
        <Button type='submit' varient='outlined' onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}

export default Login