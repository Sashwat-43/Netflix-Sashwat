import React,{ useRef } from 'react'
import './SignUp.css';
import { auth } from '../Firebase';

function SignUp() {

    const email = useRef(null);
    const password = useRef(null);

    const registerSubmit = (event) =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(
            email.current.value,
            password.current.value
        ).then( (User) =>{
            console.log(User);
        }).catch( (error) =>{
            alert(error.message);
        });
    }

    const signinSubmit = (event) =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(
            email.current.value,
            password.current.value
        ).then( (user) => {
            console.log(user);
        }).catch( (error) =>{
            alert("No User Exists with these credentials");
        });
    }
    return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                <input ref={email} type="email" placeholder="Email Address" />
                <input ref={password} type="password" placeholder="Password"/>
                <button type="submit" onClick={ signinSubmit }>
                    Sign In
                </button>
                <h3><span className="grey">New to Netflix?</span>
                <span className="link"  onClick={ registerSubmit }>Sign up now.</span> </h3>
            </form>
        </div>
    )
}

export default SignUp
