import React from 'react';
import {Well, Col, Row, Button} from 'react-bootstrap';

class Products extends React.Component {

    render() {
        return (
            <Well>
                <Row>
                    <Col xs={12} className='productItem'>
                        <img src={this.props.product.thumbnail} />
                        <h4>{this.props.product.name}</h4>
                        <p>{this.props.product.description}</p>
                        <p>Price: INR ₹ {this.props.product.price}</p>
                        <Button onClick={() => this.props.handleOnAdd(this.props.product)} bsStyle='primary'>ADD</Button>
                    </Col>
                </Row>
            </Well>
        );
    }
}

export default Products;