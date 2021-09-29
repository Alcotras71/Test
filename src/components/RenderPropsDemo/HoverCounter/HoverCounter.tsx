import React, { useState } from 'react';
import { Interface } from 'readline';

interface IProps {
    count: number,
    setCountFunction: () => void
}

const HoverCounter = (props: IProps) => {

    
    return(
        <div>
            <h2 onMouseOver={props.setCountFunction}>Hovered {props.count} times</h2>
        </div>
    )
}

export default HoverCounter;