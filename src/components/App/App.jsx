import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPositions } from '../../store/positions/positionsActions.js';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import data from '../../core/config/data.json';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  })

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
