import React, {Component} from 'react';
import logo from './logo.svg';
// import first of all...
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from "./shared/dishes";
import './App.css';
import Menu from './components/MenuComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color={'primary'}>
                    <div className='container'>
                        <NavbarBrand href='/'>
                            Hello, FOSS Contributor...
                        </NavbarBrand>
                        <Menu dishes={this.state.dishes} />
                    </div>
                </Navbar>
            </div>
        );
    }
};
export default App;
