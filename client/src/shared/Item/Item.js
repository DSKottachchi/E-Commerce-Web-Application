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
                        <NavLink to="/detail/2">
                            <a className="item__card">
                                <img src="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg"/>
                            </a>
                        </NavLink>
                    </Col>
                    <Col>
                        <a className="item__card">
                            <img src="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg"/>
                        </a>
                    </Col>
                    <Col>
                        <a className="item__card">
                            <img src="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Item;