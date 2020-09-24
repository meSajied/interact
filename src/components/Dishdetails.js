import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button, Breadcrumb, BreadcrumbItem,
    Modal, ModalHeader, ModalBody, Form, FormGroup,
    Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Loading} from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
            {/* for real animation... */}
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                {/* <CardImg width="100%" src={dish.image} alt={dish.name} /> */}
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        </div>
    )
}

function RenderComments({comments, postComment, dishId}){
    if (comments != null) {
        // for running animation...
        <Stagger in>
            let list = comments.map((comments)=>{

                return(
                    // run specific animation...
                    <Fade in>
                        <li key={comments.id} >
                            <div>
                                <p>{comments.comment}</p>
                                <p>--{comments.author},
                                    {new Intl.
                                    DateTimeFormat('en-US',
                                        { year: 'numeric', month: 'short',
                                            day: '2-digit'}).
                                    format(new Date(Date.parse(comments.date)))}</p>
                            </div>
                        </li>
                    </Fade>

                )
            })
        </Stagger>

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {list}
                </ul>
                <CommentForm dishId={dishId}
                     postComment={postComment}>

                </CommentForm>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

const Dishdetails = (props) => {

    if (this.props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (this.props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{this.props.errMess}</h4>
                </div>
            </div>
        );
    }

    else if (props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments
                        comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.dish.id}
                    />
                </div>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }

}

const require = (val) => val && val.length;
const max = (len) => (val) => !(val) || (val.length <= len);
const min = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {

        this.toggleModal();
        this.props.postComment(this.props.dishId,
            values.rating, values.author, values.comment);

    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-edit fa-lg"></span>
                    Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row  className="form-group">
                                <Label for="rating" md={12}>Rating</Label>
                                <Col  md={12}>
                                    <Control.select defaultValue="5"
                                        model=".rating" id="rating" name="rating"
                                        className="form-control" >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author"  md={12}>Your Name</Label>
                                <Col  md={12}>
                                    <Control.text model=".author" id="author"
                                      name="author" placeholder="Author"
                                      className="form-control" validators=
                                      {{ require: require, min: min(3),
                                          max: max(15) }} />
                                    <Errors className="text-danger" model=".author"
                                        show="touched" messages={{ require: 'require',
                                        min: 'Must be greater than 3 characters',
                                        max: 'Must be 15 charaters or less' }} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="feedback"  md={12}>Your feedback</Label>
                                <Col  md={12}>
                                    <Control.textarea model=".comment" id="comment"
                                      name="comment" resize="none" rows="6"
                                      className="form-control" validators={{ require: require }} />
                                    <Errors className="text-danger" model=".comment"
                                        show="touched" messages={{ require: 'require' }} />
                                </Col>
                            </Row>

                            <Button type="submit" value="submit" color="primary">
                                Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}

// I work in this more than functional dishdetails...
export default Dishdetails;