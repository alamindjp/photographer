import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const SocialLogIn = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    let lodingElement;
    if (googleError || githubError || facebookError) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
            </div>

    }
    if (googleLoading || githubLoading || facebookLoading) {
        lodingElement = <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if (googleUser || githubUser || facebookUser) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            {lodingElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-info w-25'>Google sign in</button>
                <button onClick={() => signInWithGithub()} className='btn btn-outline-secondary m-2 w-25'>Github sign in</button>
                <button onClick={() => signInWithFacebook()} className='btn btn-outline-primary w-25'>Facebok sign in</button>
            </div>

        </div>
    );
};

export default SocialLogIn;