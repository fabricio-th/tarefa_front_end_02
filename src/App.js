import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';



class App extends Component {
  render(){
    return (
      <div className="App">
      <header className="App-header">

        <UsuarioEntrada />
        <UsuarioSaida nome="Teste de nome" />  
      
      </header>
    </div>
    );    
  }
}


export default App;
