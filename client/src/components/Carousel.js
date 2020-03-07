import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


// CARD Component
import Card from '../components/Card';

// IMAGES
import beforeAfter from '../assets/images/ba-1.jpg';
import beforeAfter2 from '../assets/images/ba-2.jpg';
import oranization from '../assets/images/org-img.jpg';
import oranization2 from '../assets/images/org-img-2.jpg';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    subTitle: 'Live With What You Love',
                    imgSrc: oranization,
                    selected: false
                },
                {
                    id: 1,
                    subTitle: 'Find Your Cherished Items',
                    imgSrc: beforeAfter,
                    selected: false
                },
                {
                    id: 2,
                    subTitle: 'Tidy Your Work Space',
                    imgSrc: oranization2,
                    selected: false
                },
                {
                    id: 3,
                    subTitle: 'Kitchen and Closet Organization Available',
                    imgSrc: beforeAfter2,
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }



    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    

    render () {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;