import React, { useState } from 'react';

interface IProps {
    render: (count: number, setCountFunction: () => void) => JSX.Element
}

const Counter = (props: IProps) => {
    const [count, setCount] = useState(0);
    const setCountFunction = () => {
        setCount(count + 1);
    }

    return (
        <div>
            {props.render(count, setCountFunction)}
        </div>
    )
}

export default Counter;