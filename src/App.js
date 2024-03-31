import './App.css';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Cart />
      </div>
    </div>
  );
}

export default App;
