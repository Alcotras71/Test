import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './square2.module.css';
import { setA, setB, calculateResult, reset } from './square2Slice'

const Square2 = () => {

    const dispatch = useDispatch();

    const a = useSelector(state => state.calculations.a);
    const b = useSelector(state => state.calculations.b);
    const result = useSelector(state => state.calculations.result);

    return (
        <div className={classes.square2}>
            <div className={classes.calc}>
                <form>
                    <label htmlFor="1stNumber">1st number</label>
                    <input type="number" id='1stNumber' value={a} onChange={(e) => dispatch(setA(+e.target.value))} />
                    <br />
                    <label htmlFor="2ndNumber">2nd number</label>
                    <input type="number" id='2ndNumber' value={b} onChange={(e) => dispatch(setB(+e.target.value))} /><br />
                    <label htmlFor="result">result</label>
                    <input type="number" id='result' value={result} />
                    <button onClick={() => dispatch(calculateResult())} >calc</button>
                    <input type="reset" onClick={() => dispatch(reset())} />
                </form>
            </div>
        </div>
    )
}

export default Square2;