import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent'
import Footer from './FooterComponent'
import Dishdetails from "./Dishdetails";
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import Home from './HomeComponent';
import Card from "reactstrap/lib/Card";

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS
		};
	}

	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId});
	}

	render() {

		const HomePage = () => {
			return(
				<Home
					dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		}

		return (

			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
					<Route exact path='/contactus' component={Contact} />
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
