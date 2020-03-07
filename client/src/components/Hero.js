import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// IMAGES
import logo from '../assets/images/logo-1.png';

function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center pt-5 pb-3">
                    <Col md={8} sm={12}>
                        <img src={ logo } alt="logo" width="100%"/>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        <p></p>
                        { props.subTitle && <h3 className="display-5 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;