import React from 'react';
import {NavLink} from 'react-router-dom';
import  classes  from './navbar.module.css'

const Navbar = () => {
    return(
        <div className={classes.navbar}>
            <div>
                <NavLink to='/forms'>Forms</NavLink>
            </div>
            <div>
                <NavLink to='/info'>Info</NavLink>
            </div>
            <div>
                <NavLink to='/useCallBackDemo'>useCallBack Demo</NavLink>
            </div>
            <div>
                <NavLink to='/renderPropsDemo'>renderProps Demo</NavLink>
            </div>
        </div>
    )
}

export default Navbar;
