import React, { useState, useEffect } from 'react';
import classes from './loginForm.module.css';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPaswwordIsValid] = useState(true);

    const setEmailValue = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const setPasswordValue = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const setEmailClass = (e: React.FormEvent<HTMLInputElement>) => {
        if (emailIsValid) {
            e.currentTarget.className = 'valid'
        } else {
            e.currentTarget.className = 'invalid'
        }

    }

    const setPasswordClass = (e: React.FormEvent<HTMLInputElement>) => {
        if (passwordIsValid) {
            e.currentTarget.className = 'valid'
        } else {
            e.currentTarget.className = 'invalid'
        }

    }

    useEffect(() => {
        if (!email.includes('@')) {
            setEmailIsValid(false)
        } else {
            setEmailIsValid(true)
        }
    }, [email])

    useEffect(() => {
        if (password.length < 8) {
            setPaswwordIsValid(false)
        } else {
            setPaswwordIsValid(true)
        }
    }, [password])

    return (
        <div className={classes.loginFormContainer}>
            <p>Enter your email and password</p>
            <form className={classes.loginForm}>
                <label >Email:</label>
                <br />
                <input onChange={setEmailValue} onBlur={setEmailClass} type="email" />
                <br />
                <label >Password:</label>
                <br />
                <input onChange={setPasswordValue} onBlur={setPasswordClass} type="password" />
                <br />
                <input id="submitLoginForm" type="submit" />
            </form>
        </div>
    )
}

export default LoginForm;