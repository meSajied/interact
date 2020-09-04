import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetails extends Component {

    renderDish(dish) {
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

    renderComments(comments) {
        {new Intl.DateTimeFormat('en-US',
            { year: 'numeric', month: 'short', day: '2-digit'})
            .format(new Date(Date.parse(comments.date)))}

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