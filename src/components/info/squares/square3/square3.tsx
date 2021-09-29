import React from 'react';
import classes from './square3.module.css';

const Square3 = () => {
    return (
        <div className={classes.square3}>
            <div className={classes.list}>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
                <div id='createCookies' className={classes.createCookies}>
                    <button type='button'>create cookies</button>
                </div>
            </div>
        </div>
    )

}

export default Square3;