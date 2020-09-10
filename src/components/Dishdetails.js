import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";


class Dishdetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={this.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={this.comments} />
                        </div>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        {/* {new Intl.DateTimeFormat('en-US',
            { year: 'numeric', month: 'short', day: '2-digit'})
            .format(new Date(Date.parse(comments.date)))} */}

        if (comments != null) {
            const mapped = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </li>
                )
            });

            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul>
                        {mapped}
                    </ul>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        if(this.props.dish == null)
            return (<div></div>)

        const dishInfo = this.renderDish(this.props.dish);
        const dishComments = this.renderComments(this.props.dish.comments);
        return (
            <div className="row">
                {dishInfo}
                {dishComments}
            </div>
        )
    }
}

export default Dishdetails;