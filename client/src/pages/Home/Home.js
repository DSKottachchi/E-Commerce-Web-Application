import React from 'react';
import Header from '../../shared/Header/Header';
import Item from '../../shared/Item/Item';
import Cart from '../Cart/Cart';
import Container from 'react-bootstrap/Container';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Container>
                <div className="home-container">
                    
                    <Item />
                </div>
            </Container>
        </div>
    )
}

export default Home;