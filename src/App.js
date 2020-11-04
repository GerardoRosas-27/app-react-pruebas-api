import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './components/home/Home';

export default class App extends Component {
 
  constructor() {
    super();
    this.state = {
      usuarios: []
    }
    this.getUsuarios();
  }

  async getUsuarios(){
    
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    if(result.status === 200){
      console.log("data: ", result.data);
      this.setState({usuarios: result.data });
    }else{
      console.log("error en el API: ", result.status);
    }
    
  }

  render(){
    const { usuarios } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { usuarios.length > 0 ? <p>Datos cargados</p> :  <p>cargando datos ...</p> }
          { usuarios.length > 0 ? <Home dataUser={ usuarios }></Home> : '' }

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    }
  
}


