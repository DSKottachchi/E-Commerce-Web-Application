import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Item.css'

const Item = () => {
    return (
        <div className="item">
            <Container fluid>
                <Row>
                    <Col>
                        <NavLink to="/detail/2" className="item__link">
                            <a className="item__card">
                                <img src="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg"/>
                                <a className="item__name">
                                    Mayview Upholstered Track Arm Wood Base Sofa with Throw Pillows
                                </a>
                                <div className="item_price">$23.99</div>
                            </a>
                        </NavLink>
                    </Col>
                    <Col>
                        <a className="item__card">
                            <img src="https://media.fds.fi/product_image/800/1042Vitra_19_TH.jpg"/>
                            <a className="item__name">
                                    Mayview Upholstered Track Arm Wood Base Sofa with Throw Pillows
                            </a>
                            <div className="item_price">$23.99</div>
                        </a>
                    </Col>
                    <Col>
                        <a className="item__card">
                            <img src="https://secure.img1-fg.wfcdn.com/im/66329703/resize-h600-w600%5Ecompr-r85/3005/30057094/Loveseats+%26+Settees.jpg"/>
                            <a className="item__name">
                                Mayview Upholstered Track Arm Wood Base Sofa with Throw Pillows
                            </a>
                            <div className="item_price">$23.99</div>
                        </a>
                    </Col>
                    <Col>
                        <a className="item__card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgftVPKMqMSoKXEgUueGqFzOcz56v-zBWuSMwOtcbNXPjX_uMhaZFN_D3HW84oieQxmWA&usqp=CAU"/>
                            <a className="item__name">
                                Mayview Upholstered Track Arm Wood Base Sofa with Throw Pillows
                            </a>
                            <div className="item_price">$23.99</div>
                        </a>
                    </Col>  
                </Row>
            </Container>
        </div>
    )
}

export default Item;