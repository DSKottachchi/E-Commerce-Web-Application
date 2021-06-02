import React from 'react';
import Header from '../../shared/Header/Header';
import Input from '../../shared/Input/Input';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HomeIcon from '@material-ui/icons/Home';
import './Detail.css'

const Detail = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incrementHandler = (event) => {
        event.preventDefault()
        dispatch({ type: 'increment' })
    };

    const decrementHandler = (event) => {
        event.preventDefault()
        dispatch({ type: 'decrement' })
    };

    return (
        <div className="detail">
            <Header />
            <Container>
                <div className="detail__container">
                    <div className="detail__inner__container">
                        <Container>
                            <Row>
                                <Col md={5}>
                                    <img className="detail__image" src="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg"/>
                                </Col>
                                <Col md={7}> 
                                    <div className="detail__description">
                                        <div className="detail__heading">Vinsetto Modern Mid-Back Tufted Linen Fabric Home Office Task Chair with Arms, Swivel Adjustable </div>
                                        <div className="detail__rating">
                                        </div>
                                        <div className="detail__pricing">$159.99</div>
                                        <div className="detail__color">Actual Color: Beige</div>
                                        <div className="detail__color__container">
                                            <div className="detail__color__display color--beige">

                                            </div>
                                            <div className="detail__color__display color--brown">

                                            </div>
                                            <div className="detail__color__display color--gray">

                                            </div>
                                        </div>
                                        <div className="detail__row">
                                            <div className="detail__quantity">
                                            </div>
                                            <form className="">
                                                <Input label="Amount" input={{
                                                    id: 'amount',
                                                    type: 'number',
                                                    min: '1',
                                                    max: '5',
                                                    step: '1',
                                                    defaultValue: 1
                                                }}/>

                                                <button onClick={incrementHandler} className="detail__button">
                                                    Add to cart
                                                </button>
                                            </form>
                                        </div>
                                        <div className="detail__fulfilment__container">
                                            <div className="fulfilment__row">
                                                <span>
                                                    <LocalShippingIcon className="fulfilment__icon" />
                                                </span>
                                                <div className="fulfilment--text fulfilment--bold">Free 2-day delivery</div>
                                                <div className="fulfilment--text mb-3">Arrives by Fri, Jun 4</div>
                                                <div className="fulfilment--text fulfilment--bold">Gifting note: Ships in the manufacturer's original packaging, which may reveal the contents.</div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Detail;