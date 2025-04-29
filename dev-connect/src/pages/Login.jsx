import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slices/counterSlice';
import { change } from "../slices/anotherSlice";

const Login = () => {
    const count = useSelector((state) => state.counter.value);
    const toggle = useSelector((state) => state.switch.value);
    const color = toggle ? 'green' : 'red';

    const dispatch = useDispatch();
    return (
        <div>
        <h1 style={{ color }}>{count}</h1> 
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(change())}>change</button>
      </div>
    );
    }
export default Login;