import { Container, Row, Col } from 'react-bootstrap';
import Input from '../../shared/Input/Input';
import Header from '../../shared/Header/Header';
import React from 'react';
import './Cart.css';

const Cart = (props) => {     
    return (
        <div className="cart">
            <Header />
            <div className="cart__container">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="cart__header">Your cart: 3 items</div>
                            <Row>
                                <Col md={2}>
                                    <img className="cart__image" src="https://ii1.pepperfry.com/media/catalog/product/r/o/800x880/royal-wing-chair-in-blue-color-by-dreamzz-furniture-royal-wing-chair-in-blue-color-by-dreamzz-furnit-6hcjya.jpg" />
                                </Col>
                                <Col md={6}>
                                    <div className="cart__head">Flash Furniture White Sit to Stand Mobile Laptop Computer Desk</div>
                                    <div className="cart__color">Actual Color: White</div>
                                    <div className="cart__desc__container">
                                        <div className="cart__desc">Add-on services (0 selected)</div>
                                        <div className="cart__desc">Protection Plans</div>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <Input label="Quantity" input={{
                                        id: 'amount',
                                        type: 'number',
                                        min: '1',
                                        max: '5',
                                        step: '1',
                                        defaultValue: '1'
                                    }}/>
                                </Col>
                                <Col md={2}>
                                
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <img className="cart__image" src="https://ii1.pepperfry.com/media/catalog/product/r/o/800x880/royal-wing-chair-in-blue-color-by-dreamzz-furniture-royal-wing-chair-in-blue-color-by-dreamzz-furnit-6hcjya.jpg" />
                                </Col>
                                <Col md={6}>
                                    <div className="cart__head">Flash Furniture White Sit to Stand Mobile Laptop Computer Desk</div>
                                    <div className="cart__color">Actual Color: White</div>
                                    <div className="cart__desc__container">
                                        <div className="cart__desc">Add-on services (0 selected)</div>
                                        <div className="cart__desc">Protection Plans</div>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <Input label="Quantity" input={{
                                        id: 'amount',
                                        type: 'number',
                                        min: '1',
                                        max: '5',
                                        step: '1',
                                        defaultValue: '1'
                                    }}/>
                                </Col>
                                <Col md={2}>
                                
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className="cart__pricing">
                            <Container className="pricing__container">
                                <Row>
                                    <Col className="pricing__left">
                                        <div className="pricing--font">
                                            <div className>Subtotal (3 items)</div>
                                            <div>Delivery</div>
                                        </div>    
                                    </Col>
                                    <Col className="pricing--font pricing__right">
                                        <div>$218.23</div>
                                        <div>Free</div> 
                                    </Col>
                                </Row>
                                <button className="pricing__btn">
                                    Checkout
                                </button>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>    
        </div>
    )
}

export default Cart;