import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementAction, loadDataAction, simpleAction } from './redux/Actions/Action';
import SingleData from './component/SingleData';

function App() {
  const data = useSelector(state => state)

  // const { number } = data;

  const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(simpleAction())
  // }

  // const handleDecrement = () => {
  //   dispatch(decrementAction())
  // }

  useEffect(() => {
    dispatch(loadDataAction())
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>
            {/* <p>{number}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button> */}
            {
              data.data?.map(d => <Link to={`/data/${d.id}`} style={{margin: '20px', display: 'block', cursor: 'pointer'}}>{d.title}</Link>)
            }
          </div>
        </Route>
        <Route path="/data/:id">
          <SingleData />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
