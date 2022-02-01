import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Continents from './components/Continents/Continents';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import continentsThunk from './redux/thunk/continentsThunk';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(continentsThunk());
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Continents />
    </div>
  );
}

export default App;
