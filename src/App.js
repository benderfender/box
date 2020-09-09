import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxContext from './contexts/BoxContext';
import boxForm from './components/boxForm';

function App() {
  const[box,setBox] = useState([]);
  const[color,setColor] = useState("");


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BoxContext.Provider value={{color,setColor,box,setBox}}>
        <boxForm />
      </BoxContext.Provider>
    </div>
  );
}

export default App;
