import React, { useCallback, useState } from 'react';
import Count from './Count/count';
import Title from './Title/Title';
import Button from './Button/button';

const UseCallBackDemo = () => {
    const [age, setAge] = useState(20);
    const [weight, setWeight] = useState(60);

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementWeight = useCallback(() => {
        setWeight(weight + 5)
    }, [weight])

    return (
        <div>
            <Title />
            <Count count={age} text='age' />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count count={weight} text='weight' />
            <Button handleClick={incrementWeight}>Increment Weight</Button>
        </div>


    )
}

export default UseCallBackDemo;