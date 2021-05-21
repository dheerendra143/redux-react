import React from 'react';
import logo from './logo.svg';
import './App.css';
import From from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, sign_in } from './actions';

function App() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(sign_in())}>SIGN IN</button>
    </div>
  );
}

export default App;
