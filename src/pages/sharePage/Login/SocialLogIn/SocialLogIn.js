import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const SocialLogIn = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    let errorElement;
    let lodingElement;
    if (googleError || githubError) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
            </div>

    }
    if (googleLoading || githubLoading) {
        lodingElement = <div class="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if (googleUser || githubUser) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center mt-4'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 p-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            {lodingElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-info w-25'>Google sign in</button>
                <button onClick={() => signInWithGithub()} className='btn btn-outline-secondary m-2 w-25'>Github sign in</button>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-primary w-25'>Facebok sign in</button>
            </div>

        </div>
    );
};

export default SocialLogIn;