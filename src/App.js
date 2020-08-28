import React from 'react';
import logo from './logo.svg';
// import first of all...
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color={'primary'}>
        <div className='container'>
            <NavbarBrand href='/'>
                Hello, FOSS Contributor...
            </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
