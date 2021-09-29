import React, { useContext } from 'react';
import LoginForm from './loginForm/loginForm';
import UserDataForm from './userDataForm/userDataForm';


const Forms = () => {
    
    return (
        <div>
            <LoginForm />
            <UserDataForm />
        </div>
    )
}

export default Forms;