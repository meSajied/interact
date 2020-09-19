import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
	CardTitle } from 'reactstrap';
import Dishdetails from "./Dishdetails";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

class Menu extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedDish: null
		};
	}

	onDishSelect(dish) {
		this.setState({ selectedDish: dish});
	}

	// no need when Dishdetails...
	renderDish(dish) {
		if (dish != null) {
			return (
				<div className="col-12 col-md-5 m-1">
					<Card >
						{/* <CardImg width="100%" src={dish.image} alt={dish.name} /> */}
						<CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>

			);
		}
		else {
			return(<div></div>);
		}

	}

	render() {
		const menu = this.props.dishes.dishes.map((dish) => {
			return (
				<div  className="col-12 col-md-5 m-1">
					{/* <Card key={dish.id}
					      onClick={() => this.onDishSelect(dish)}> */}
					<Card key={dish.id}
					      onClick={() => this.props.onClick(dish.id)}>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardText src={dish.comment} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});

		if (this.props.dishes.isLoading) {
			return(
				<div className="container">
					<div className="row">
						<Loading />
					</div>
				</div>
			);
		}
		else if (this.props.dishes.errMess) {
			return(
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h4>{this.props.dishes.errMess}</h4>
						</div>
					</div>
				</div>
			);
		}
		else{
			return (
				<div className="container">
					<div className="row">
						{menu}
					</div>
					<div className="row">
						<div  className="col-12 col-md-5 m-1">
							<Dishdetails dish={this.state.selectedDish} />
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Menu;
