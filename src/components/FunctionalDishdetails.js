import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish(dish) {
    if (dish != null)
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return(
            <div></div>
        );
}

function RenderComments(comments) {
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

const DishDetails = (this.props) {
    if(props.dish == null)
        return (<div></div>)

    <RenderDish dish={this.props.dish} />
<RenderComments comments={props.dish.comments} />
    return (
        <div className="row">
            {dishInfo}
            {dishComments}
        </div>
    )
}

export default Dishdetails;
