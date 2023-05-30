import React from 'react'
import Count from './Count'
import { useDispatch } from 'react-redux'

const CounterApp = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className='counter_app'>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                <Count />
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            </div>
        </>
    )
}

export default CounterApp

