import React, { useState } from 'react';
import ClickCounter from './ClickCounter/ClickCounter';
import HoverCounter from './HoverCounter/HoverCounter';
import Counter from './Counter/Counter';

const RenderPropsDemo = () => {
    return(
        <div>
            <Counter render={(count: number, setCountFunction: () => void) => <ClickCounter count={count} setCountFunction={setCountFunction}/>}/>
            <Counter render={(count: number, setCountFunction: () => void) => <HoverCounter count={count} setCountFunction={setCountFunction}/>}/>
        </div>
    )
}

export default RenderPropsDemo;