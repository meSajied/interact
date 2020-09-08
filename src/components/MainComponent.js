import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Dishdetails from "./Dishdetails";
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import Card from "reactstrap/lib/Card";

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null
		};
	}

	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId});
	}

	render() {

		const HomePage = () => {
			return(
				<Home />
			);
		}

		return (

			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>

			/*
			commented for new task...
			<div>
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>
				<Header />
				<Menu dishes={this.state.dishes} onClick={(dishId) =>
					this.onDishSelect(dishId)} />
				<Dishdetails dish={this.state.dishes.filter((dish) =>
					dish.id === this.state.selectedDish)[0]} />
				<Footer />
			</div>
			 */
		);
	}
}

export default Main;
