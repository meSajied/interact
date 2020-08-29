import React from 'react';
import logo from './logo.svg';
// import first of all...
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color={'primary'}>
        <div className='container'>
            <NavbarBrand href='/'>
                Hello, FOSS Contributor...
            </NavbarBrand>
            <Menu />
        </div>
      </Navbar>
    </div>
  );
}

export default App;
