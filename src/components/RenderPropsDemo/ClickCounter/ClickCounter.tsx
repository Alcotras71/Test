import React, { useState } from 'react';

interface IProps {
    count: number,
    setCountFunction: () => void
}

const ClickCounter = (props: IProps) => {
    return(
        <div>
            <button onClick={props.setCountFunction}>Clicked {props.count} times</button>
        </div>
    )
}

export default ClickCounter;
