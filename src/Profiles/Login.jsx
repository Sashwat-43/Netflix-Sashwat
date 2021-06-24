import React,{ useState } from 'react';
import './Login.css';
import SignUp from './SignUp';

function Login() {

    const [signIn,SetsignIn] = useState(false);
    return (
        <div className="login">
            <div className="login_background">
                <img className="logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix"/>
                <button className="login_button" onClick={ () => SetsignIn(true)}>
                    Sign In
                </button>
                <div className="login_gradient">
                </div>
                <div className="login_body">
                    {signIn ? <SignUp/> 
                    :
                        <>
                            <h1>Unlimited movies, TV shows and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="login_input">
                            <form>
                                <input type="email" placeholder="Email Address"/>
                                <button className="login_button_input" onClick={ () => SetsignIn(true)}>Get Started</button>
                            </form>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login
