import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from './../../../firebase.init';
import { ToastContainer } from 'react-bootstrap';


const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'> Please Verify your email address</h5>
            <button
            className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    
    return children;
};

export default RequireAuth;