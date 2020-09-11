import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
// import first of all...
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from "./shared/dishes";
import './App.css';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

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

            <Provider>
                <BrowserRouter>
                    <div className="App">
                        <Main />
                        {/* no need when main component works... */}
                        {/* <Navbar dark color={'primary'}>
                    <div className='container'>
                        <Menu dishes={this.state.dishes} />
                    </div>
                </Navbar> */}
                    </div>
                </BrowserRouter>
            </Provider>

        );
    }
};
export default App;
