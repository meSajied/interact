import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { actions } from 'react-redux-form';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Contact from './ContactComponent'
import Footer from './FooterComponent'
import Dishdetails from "./Dishdetails";
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import Home from './HomeComponent';
import Card from "reactstrap/lib/Card";
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}
}

const mapDispatchToProps = dispatch => ({

	addComment: (dishId, rating, author, comment) =>
		dispatch(addComment(dishId, rating, author, comment)),
	fetchDishes: () => { dispatch(fetchDishes())},
	// added feed back for redux-form...
	resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

});

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

	componentDidMount() {
		this.props.fetchDishes();
	}

	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId});
	}

	render() {

		const HomePage = () => {
			return(
				<Home
					dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrMess={this.props.dishes.errMess}
					promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		}

		const DishWithId = ({match}) => {
			return(
				<Dishdetails dish={this.props.dishes.dishes.filter((dish) =>
					dish.id === parseInt(match.params.dishId,10))[0]}
				            isLoading={this.props.dishes.isLoading}
				            errMess={this.props.dishes.errMess}
				            comments={this.props.comments.filter((comment) =>
				            comment.dishId === parseInt(match.params.dishId,10))}
				            addComment={this.props.addComment}
				/>
			);
		};

		return (
			<div>
				<Header />
				<div>
					<Switch>
						<Route path='/home' component={HomePage} />
						<Route exact path='/aboutus' component={() =>
							<About leaders={this.props.leaders} />} />} />
						<Route exact path='/menu' component={() =>
							<Menu dishes={this.props.dishes} />} />
						<Route path='/menu/:dishId' component={DishWithId} />
						// added feedback form...
						<Route exact path='/contactus' component={() =>
							<Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
						<Redirect to="/home" />
					</Switch>
				</div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
