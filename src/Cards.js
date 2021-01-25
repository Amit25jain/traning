import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './css/All.css';
import Carddata from './Carddata';
function Cards(props) {
    return (
        <>
            <CardGroup className="box">
                <Card className="box1">
                <Card.Footer className="box2">
                <Card.Title >{props.title}</Card.Title>
                    </Card.Footer>
                    <Card.Body>
                      
                        <Card.Text className="box3">
                        {props.text}
                     </Card.Text>
                    </Card.Body>
                    
                </Card>

            </CardGroup>





           
        </>
    )
};
export default Cards;
