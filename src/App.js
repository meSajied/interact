import React, {Component} from 'react';
// import first of all...
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from "./shared/dishes";
import './App.css';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';

class App extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
*/
    render() {
        return (
            <div className="App">
                <div className="App">
                    <Main />
                </div>

                {/* no need when main component works... */}
                {/* <Navbar dark color={'primary'}>
                    <div className='container'>
                        <Menu dishes={this.state.dishes} />
                    </div>
                </Navbar> */}
            </div>
        );
    }
};
export default App;
