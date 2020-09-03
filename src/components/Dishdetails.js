import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetails extends Component {
    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
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
    renderComments(dishComments) {

        if (dishComments != null) {
            const comments = dishComments.map((list) => {
                return (
                    <li key={list.id}>
                        <p><span>-- {list.author},</span> {list.date}</p>
                        <p>{list.comment}</p>
                    </li>
                );
            })
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }
        else {
            return (<div>hello</div>);
        }


    }
    render() {

        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
            </div>

        );
    }
}

export default Dishdetails;
