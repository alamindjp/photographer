import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogIn from '../Login/SocialLogIn/SocialLogIn';

const SignUp = () => {
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
        ] = useCreateUserWithEmailAndPassword(auth);

        const nameRef = useRef();
        const emailRef = useRef('');
        const passwordRef = useRef('');

        const navigate = useNavigate('');

        const handelSignUp = e => {
            e.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            createUserWithEmailAndPassword(email, password)
        }
        if(user){
            navigate('/home')
        }
        const navigateLogin = () => {
            navigate('/login')
        }
        return (
            <div className='container w-50 border border-primary p-5'>
                <h1 className="text-info m-2">Please SignUp</h1>
                <form onSubmit={handelSignUp}>
                    <div>
                        <input type="text" name='name' className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault01" ref={nameRef} placeholder='Enter Your Name' required />
                    </div>
                    <div>
                        <input type="email" name='email' ref={emailRef} className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault02" placeholder='Enter Your Email' required />
                        <input type="password" name="password" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault03" ref={passwordRef} placeholder='Create a Password' required />
                    </div>
                    <div>
                        <div className="form-check my-3 text-start">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label className="form-check-label">Agree to terms and conditions</label>
                        </div>
                    </div>
                    <p>Have an account?<Link to="/login" className='text-primary text-decoration-none' onClick={navigateLogin}> Please login</Link></p>
                    <div>
                        <button className="btn btn-primary" type="submit">Sign Up</button>
                    </div>
                </form>
                <SocialLogIn></SocialLogIn>
            </div>
        );
    };

    export default SignUp;