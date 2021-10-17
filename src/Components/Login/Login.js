import React from 'react';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {
    const {signInWithGoogle} = UseAuth()
    return (
        <div>
            <h2>Please Log In</h2>
            <button onClick={signInWithGoogle} className='btn btn-lg btn-outline-dark'>Google Sign In</button>
        </div>
    );
};

export default Login;