import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }
      if (user) {
          navigate('/home');
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-1'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={()=> signInWithGoogle()} className='border rounded-3 m-1'><img width={30} src="https://i.ibb.co/dfQLt89/google.webp" alt="" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;